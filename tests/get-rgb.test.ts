import { expect, it } from 'vitest';
import { getRgbStr } from '../src';

it('get a rgb format string', () => {
  expect(getRgbStr('#1677ff')).toBe('22,119,255');
});
