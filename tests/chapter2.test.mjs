import {test} from 'node:test';
import assert from 'node:assert/strict';
import {chapter2Questions as qs} from '../site/toan11-chuong2.js';
import {chapters} from '../site/data.js';
const answer = n => qs[n - 1].options[qs[n - 1].answer];
const sum = a => a.reduce((s, x) => s + x, 0);
const ap = (a, d, n) => Array.from({length: n}, (_, i) => a + i * d);
const gp = (a, q, n) => Array.from({length: n}, (_, i) => a * q ** i);

test('Chương 2 tích hợp đúng 30 câu, tập trung vào hai cấp số', () => {
  assert.deepEqual(chapters('toan', 11)[1].questions, qs);
  assert.equal(qs.length, 30);
  assert.deepEqual([0, 1, 2, 3].map(i => qs.filter(q => q.lesson.startsWith(`Bài ${i + 1}`)).length), [2, 12, 12, 4]);
  for (const q of qs) {
    assert.equal(new Set(q.options).size, 4, q.id);
    assert.ok(q.answer >= 0 && q.answer < 4);
    assert.ok(q.hint && q.explanation && q.type && q.source.page);
    assert.equal(q.sample, false);
  }
});

test('Tính độc lập các số hạng, vị trí và tổng', () => {
  assert.equal(answer(1), ap(1, 3, 4).join('; '));
  assert.equal(answer(2), gp(2, -3, 4).join('; ').replaceAll('-', '−'));
  assert.equal(answer(4), String(ap(-4, 5, 12).at(-1)));
  assert.equal(answer(5), String(ap(2, 3, 20).at(-1)));
  assert.equal(answer(6), String(ap(7, -2, 30).indexOf(-31) + 1));
  assert.equal(answer(9), String(sum(ap(3, 4, 20))));
  assert.equal(answer(10), String(Array.from({length: 20}, (_, i) => i + 1).find(n => sum(ap(5, 3, n)) === 185)));
  assert.equal(sum(ap(0, 3, 4)), 18);
  assert.equal(sum(ap(0, 3, 6)), 45);
  assert.equal(answer(13), ap(3, 5, 6).slice(1, -1).join('; '));
  assert.equal(answer(16), String(gp(3, -2, 7).at(-1)));
  assert.equal(answer(17), String(gp(2, 3, 6).at(-1)));
  assert.equal(answer(21), String(sum(gp(2, 3, 6))));
  assert.equal(answer(22), String(sum(gp(5, 1, 20))));
  assert.equal(answer(23), String(gp(3, 2, 12).indexOf(384) + 1));
  assert.equal(sum(gp(2, 2, 3)), 14);
  assert.equal(sum(gp(2, 2, 6)), 126);
  assert.equal(answer(27), `${sum(ap(18, 2, 20))} ghế`);
  assert.equal(answer(28), String(gp(500, 2, 5).at(-1)));
  const u = [1];
  while (u.length < 10) u.push(2 * u.at(-1) + 3);
  assert.equal(answer(30), String(sum(u)));
});

test('Giữ đầy đủ công bội âm và kiểm tra các trường hợp dễ nhầm', () => {
  assert.equal(answer(18), [-3, 3].map(q => gp(2, q, 4).at(-1)).join(' và ').replaceAll('-', '−'));
  assert.equal(answer(19), '(3; 48) và (−3; −48)');
  for (const q of [4, -4]) {
    const seq = gp(12 / q, q, 4);
    assert.equal(seq[1], 12);
    assert.equal(seq[3], 192);
  }
  assert.equal(answer(24), '(6; 18; 54) và (−6; 18; −54)');
  for (const q of [3, -3]) assert.equal(gp(2, q, 5).at(-1), 162);
  assert.equal(answer(25), [sum(gp(3, -2, 5)), sum(gp(3, 2, 5))].join(' và '));
  assert.equal(answer(8), 'x = 2');
  assert.equal(2 + 1, 2 * 2 - 1);
  assert.equal(2 * 2 - 1, 5 * 2 - 7);
  assert.equal(answer(20), 'x = 3');
  assert.equal((3 + 1) / (3 - 1), (3 + 5) / (3 + 1));
  assert.equal(answer(29), '(5; 25) và (−3; 9)');
  for (const [a, b] of [[5, 25], [-3, 9]]) {
    assert.equal(a * a, b);
    assert.equal(1 + b, 2 * (a + 8));
  }
});
