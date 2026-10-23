import { DatabaseSync } from 'node:sqlite';
import { copyFile, mkdir, access } from 'node:fs/promises';
import { resolve, join } from 'node:path';

// Restore only into a NEW directory, never overwrite a live database.
const [source,target]=process.argv.slice(2);
if(!source||!target){console.error('Cách dùng: node scripts/restore.mjs <backup.sqlite> <thư-mục-mới>');process.exit(1);}
const dest=resolve(target);
try{await access(dest);throw new Error('Thư mục đích đã tồn tại. Chọn thư mục mới để bảo toàn dữ liệu.');}
catch(error){if(error.code!=='ENOENT')throw error;}
const db=new DatabaseSync(resolve(source),{readOnly:true});
try{
 if(db.prepare('PRAGMA integrity_check').get().integrity_check!=='ok')throw new Error('Bản sao lưu không toàn vẹn.');
 for(const table of ['users','questions','attempts','documents'])db.prepare(`SELECT count(*) FROM ${table}`).get();
 if(db.prepare('PRAGMA foreign_key_check').all().length)throw new Error('Bản sao lưu có lỗi liên kết dữ liệu.');
}finally{db.close();}
await mkdir(dest,{recursive:true});await copyFile(resolve(source),join(dest,'btvn.sqlite'));
// Old sessions must not survive a restore.
const restored=new DatabaseSync(join(dest,'btvn.sqlite'));restored.exec('DELETE FROM sessions');restored.close();
console.log('Đã khôi phục và thu hồi phiên cũ. Dừng máy chủ, đặt DATA_DIR='+dest+', rồi khởi động lại và kiểm tra.');
