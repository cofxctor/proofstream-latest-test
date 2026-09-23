import assert from 'node:assert/strict';
import { test } from 'node:test';
import { total } from './rate';

test('adds up', () => assert.equal(total([{ at: 1, amount: 2 }, { at: 2, amount: 3 }]), 5));
test('empty is zero', () => assert.equal(total([]), 0));
