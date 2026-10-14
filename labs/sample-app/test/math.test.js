import { test } from 'node:test';
import assert from 'node:assert/strict';
import { add, average } from '../src/math.js';

test('add는 두 수를 더한다', () => {
  assert.equal(add(2, 3), 5);
});

test('average는 평균을 구한다', () => {
  assert.equal(average([1, 2, 3, 4]), 2.5);
});

test('빈 배열의 평균은 0이다', () => {
  assert.equal(average([]), 0);
});
