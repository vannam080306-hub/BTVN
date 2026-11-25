import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { chapters } from '../site/data.js';
import { gradeShortAnswer } from '../site/answers.js';
import { richText } from '../site/math.js';

test('Hóa 12 có đủ 620 câu theo thứ tự PDF và chấm được từng dạng bài', () => {
 const bank = chapters('hoa', 12);
 assert.deepEqual(bank.map(c => c.questions.length), [138, 115, 95, 50, 67, 53, 57, 45]);
 const counts = { choice: 0, short: 0, 'true-false': 0 };
 for (const chapter of bank) {
  chapter.questions.forEach((q, i) => {
   assert.equal(q.id, 'hoa-12-'+chapter.id+'-pdf-'+(i+1));
   assert.ok(q.prompt && q.explanation && q.nativeLatex && q.originalSolution, q.id);
   counts[q.kind ?? 'choice']++;
   if (q.kind === 'short') {
    assert.ok(gradeShortAnswer(q, q.acceptedAnswers?.[0] ?? String(q.value)), q.id);
   } else if (q.kind === 'true-false') {
    assert.equal(q.statements.length, 4, q.id);
    assert.equal(q.answer.length, 4, q.id);
    assert.ok(q.answer.every(value => value === 'Đúng' || value === 'Sai'), q.id);
   } else {
    assert.equal(q.options.length, 4, q.id);
    assert.ok(q.options.every(Boolean) && q.options[q.answer], q.id);
   }
  });
 }
 assert.deepEqual(counts, { choice: 366, short: 140, 'true-false': 114 });
});

test('Công thức, bảng và hình Hóa 12 hiển thị từ dữ liệu đã đóng gói', async () => {
 const questions = chapters('hoa', 12).flatMap(c => c.questions);
 const files = new Set();
 for (const q of questions) {
  const assets = q.sourceAssets ?? {};
  const cells = Object.values(assets).flatMap(asset => asset.rows?.flat() ?? []);
  const fields = [q.prompt, q.explanation, ...q.options ?? [], ...q.statements ?? [], ...cells];
  for (const field of fields) {
   assert.doesNotThrow(() => richText(field), q.id + ' ' + field);
   for (const [, token] of field.matchAll(/⟦([^⟧]+)⟧/g)) assert.ok(assets[token], q.id + ' ' + token);
  }
  for (const asset of Object.values(assets)) if (asset.file) files.add(asset.file);
 }
 assert.ok(files.size > 0);
 for (const file of files) {
  const buffer = await readFile(new URL('../assets/hoa12/'+file, import.meta.url));
  assert.equal(buffer.toString('ascii', 8, 12), 'WEBP', file);
 }
});
