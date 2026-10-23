import { DatabaseSync, backup } from 'node:sqlite';
import { mkdirSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { randomBytes, scryptSync, timingSafeEqual } from 'node:crypto';

export const dataDir = resolve(process.env.DATA_DIR || './data');
mkdirSync(dataDir, { recursive: true });
export const db = new DatabaseSync(join(dataDir, 'btvn.sqlite'));
db.exec(`PRAGMA journal_mode=WAL; PRAGMA foreign_keys=ON; PRAGMA busy_timeout=5000;
CREATE TABLE IF NOT EXISTS users (
 id INTEGER PRIMARY KEY, username TEXT NOT NULL UNIQUE, name TEXT NOT NULL,
 password TEXT NOT NULL, role TEXT NOT NULL CHECK(role IN ('teacher','student')),
 owner_id INTEGER REFERENCES users(id), class_name TEXT NOT NULL DEFAULT 'Lớp học',
 locked INTEGER NOT NULL DEFAULT 0, must_change INTEGER NOT NULL DEFAULT 0,
 created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS sessions (
 token TEXT PRIMARY KEY, user_id INTEGER NOT NULL REFERENCES users(id), csrf TEXT NOT NULL, expires INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS documents (
 id INTEGER PRIMARY KEY, teacher_id INTEGER NOT NULL REFERENCES users(id), title TEXT NOT NULL,
 filename TEXT, file_base64 TEXT, content TEXT NOT NULL, analysis TEXT NOT NULL DEFAULT '{}',
 status TEXT NOT NULL DEFAULT 'extracted', created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS questions (
 id INTEGER PRIMARY KEY, teacher_id INTEGER NOT NULL REFERENCES users(id), family TEXT NOT NULL,
 version INTEGER NOT NULL DEFAULT 1, subject TEXT NOT NULL, lesson TEXT NOT NULL, type TEXT NOT NULL,
 difficulty TEXT NOT NULL CHECK(difficulty IN ('easy','medium','hard')), prompt TEXT NOT NULL,
 kind TEXT NOT NULL CHECK(kind IN ('choice','number','text')), options TEXT NOT NULL DEFAULT '[]',
 answer TEXT NOT NULL, tolerance REAL NOT NULL DEFAULT 0, solution TEXT NOT NULL,
 hints TEXT NOT NULL, sources TEXT NOT NULL DEFAULT '[]', status TEXT NOT NULL DEFAULT 'draft',
 approved_by INTEGER REFERENCES users(id), approved_at TEXT, created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS assignments (
 id INTEGER PRIMARY KEY, teacher_id INTEGER NOT NULL REFERENCES users(id), title TEXT NOT NULL,
 mode TEXT NOT NULL CHECK(mode IN ('practice','exam')), minutes INTEGER NOT NULL DEFAULT 0,
 allow_hints INTEGER NOT NULL DEFAULT 1, release TEXT NOT NULL DEFAULT 'immediate',
 opens_at TEXT, closes_at TEXT, created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS student_assignments (
 id INTEGER PRIMARY KEY, assignment_id INTEGER NOT NULL REFERENCES assignments(id),
 student_id INTEGER NOT NULL REFERENCES users(id), question_ids TEXT NOT NULL,
 UNIQUE(assignment_id,student_id)
);
CREATE TABLE IF NOT EXISTS attempts (
 id INTEGER PRIMARY KEY, student_assignment_id INTEGER NOT NULL UNIQUE REFERENCES student_assignments(id),
 student_id INTEGER NOT NULL REFERENCES users(id), started_at INTEGER NOT NULL, deadline INTEGER,
 submitted_at INTEGER, status TEXT NOT NULL DEFAULT 'active'
);
CREATE TABLE IF NOT EXISTS answers (
 id INTEGER PRIMARY KEY, attempt_id INTEGER NOT NULL REFERENCES attempts(id), question_id INTEGER NOT NULL REFERENCES questions(id),
 draft TEXT NOT NULL DEFAULT '', response TEXT, correct INTEGER, feedback TEXT,
 saved_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP, graded_at TEXT,
 UNIQUE(attempt_id,question_id)
);
CREATE TABLE IF NOT EXISTS hint_events (
 id INTEGER PRIMARY KEY, attempt_id INTEGER NOT NULL REFERENCES attempts(id), student_id INTEGER NOT NULL REFERENCES users(id),
 question_id INTEGER NOT NULL REFERENCES questions(id), step INTEGER NOT NULL, created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
 UNIQUE(attempt_id,question_id,step)
);
CREATE TABLE IF NOT EXISTS ai_runs (
 id INTEGER PRIMARY KEY, teacher_id INTEGER NOT NULL REFERENCES users(id), purpose TEXT NOT NULL,
 model TEXT NOT NULL, sources TEXT NOT NULL, status TEXT NOT NULL, created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS recommendations (
 id INTEGER PRIMARY KEY, student_id INTEGER NOT NULL REFERENCES users(id), content TEXT NOT NULL,
 rule_version TEXT NOT NULL DEFAULT 'mastery-v1-min5', created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS audit_logs (
 id INTEGER PRIMARY KEY, actor_id INTEGER REFERENCES users(id), action TEXT NOT NULL, target TEXT NOT NULL,
 created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS question_scope ON questions(teacher_id,status);
CREATE INDEX IF NOT EXISTS student_scope ON users(owner_id,role);
CREATE INDEX IF NOT EXISTS attempt_student ON attempts(student_id);
CREATE INDEX IF NOT EXISTS answer_attempt ON answers(attempt_id);
`);
export const all = (sql, ...params) => db.prepare(sql).all(...params);
export const one = (sql, ...params) => db.prepare(sql).get(...params);
export const run = (sql, ...params) => db.prepare(sql).run(...params);
export const json = (value, fallback = []) => { try { return JSON.parse(value); } catch { return fallback; } };
export function transaction(fn) {
 db.exec('BEGIN IMMEDIATE');
 try { const result = fn(); db.exec('COMMIT'); return result; }
 catch (e) { db.exec('ROLLBACK'); throw e; }
}
export function hash(password) {
 const salt = randomBytes(16).toString('hex');
 return salt + ':' + scryptSync(password, salt, 64).toString('hex');
}
export function verify(password, stored) {
 const [salt, value] = stored.split(':');
 const candidate = scryptSync(password, salt, 64);
 return !!value && candidate.length === Buffer.from(value, 'hex').length && timingSafeEqual(candidate, Buffer.from(value, 'hex'));
}
export const audit = (actor, action, target) => run('INSERT INTO audit_logs(actor_id,action,target) VALUES(?,?,?)', actor, action, String(target));
export async function createBackup() {
 const dir = resolve(process.env.BACKUP_DIR || './backups');
 mkdirSync(dir, { recursive: true });
 const filename = 'btvn-' + new Date().toISOString().replace(/[:.]/g, '-') + '.sqlite';
 await backup(db, join(dir, filename));
 return filename;
}
export function initialize() {
 if (one("SELECT id FROM users WHERE role='teacher'")) return;
 const password = process.env.ADMIN_PASSWORD;
 if (!password || password.length < 10) throw new Error('Đặt ADMIN_PASSWORD ít nhất 10 ký tự trong .env trước khi chạy lần đầu.');
 const r = run("INSERT INTO users(username,name,password,role) VALUES(?,?,?,'teacher')", process.env.ADMIN_USERNAME || 'giaovien', process.env.ADMIN_NAME || 'Giáo viên', hash(password));
 if (process.env.SEED_DEMO === 'true') seed(Number(r.lastInsertRowid));
}
function seed(teacher) {
 const source = run("INSERT INTO documents(teacher_id,title,content,status,analysis) VALUES(?,?,?,'confirmed',?)", teacher, 'Phương trình bậc nhất một ẩn', 'Phương trình ax + b = c, với a khác 0. Bước 1: Chuyển hạng tử tự do sang vế phải. Bước 2: Chia hai vế cho a. Bước 3: Thay nghiệm vào phương trình để kiểm tra.', JSON.stringify({theory:'Phương trình ax + b = c, a ≠ 0.',types:['Tìm nghiệm phương trình bậc nhất'],steps:['Chuyển hạng tử tự do','Chia hai vế cho hệ số của x','Thay nghiệm để kiểm tra']}));
 for(let i=0;i<12;i++) {
  const a=2+i%4, x=2+i, b=3+i%5, c=a*x+b;
  run(`INSERT INTO questions(teacher_id,family,subject,lesson,type,difficulty,prompt,kind,answer,solution,hints,sources,status,approved_by,approved_at)
    VALUES(?,?,?,?,?,?,?,'number',?,?,?,?,'published',?,CURRENT_TIMESTAMP)`, teacher, 'demo-'+i, 'Toán học', 'Phương trình bậc nhất', 'Tìm nghiệm phương trình', i<4?'easy':i<8?'medium':'hard', `Giải phương trình: ${a}x + ${b} = ${c}.`, String(x), `${a}x = ${c} − ${b} = ${c-b}. Chia hai vế cho ${a}: x = ${x}. Kiểm tra: ${a} × ${x} + ${b} = ${c}.`, JSON.stringify([`Chuyển ${b} sang vế phải và đổi dấu.`,`Ta có ${a}x = ${c-b}. Hãy chia hai vế cho ${a}.`]), JSON.stringify([{documentId:Number(source.lastInsertRowid),location:'Đoạn 1',quote:'Chia hai vế cho a.'}]), teacher);
 }
}
