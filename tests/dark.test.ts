import { it } from 'vitest';
import { generate } from '../src';
import { expectColorPalette } from './util';

const darkRedColors = generate('#f5222d', { dark: true });
const darkVolcanoColors = generate('#fa541c', { dark: true });
const darkOrangeColors = generate('#fa8c16', { dark: true });
const darkBlueColors = generate('#1677ff', { dark: true });

it('generate red dark color', () => {
  expectColorPalette(darkRedColors, '#f5222d', true);
});

it('generate blue dark color', () => {
  expectColorPalette(darkBlueColors, '#1677ff', true);
});

it('generate volcano dark color', () => {
  expectColorPalette(darkVolcanoColors, '#fa541c', true);
});

it('generate orange dark color', () => {
  expectColorPalette(darkOrangeColors, '#fa8c16', true);
});
