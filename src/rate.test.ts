import assert from 'node:assert/strict';
import { test } from 'node:test';
import { rateOver, total } from './rate';

test('adds up', () => assert.equal(total([{ at: 1, amount: 2 }, { at: 2, amount: 3 }]), 5));
test('empty is zero', () => assert.equal(total([]), 0));

test('rate is the total per second', () =>
  assert.equal(rateOver([{ at: 1, amount: 10 }, { at: 2, amount: 10 }], 4), 5));
test('a zero window has no rate', () => assert.equal(rateOver([{ at: 1, amount: 10 }], 0), 0));
test('a fractional rate is not rounded', () => assert.equal(rateOver([{ at: 1, amount: 5 }], 2), 2.5));
