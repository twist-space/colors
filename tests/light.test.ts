import { it } from 'vitest';
import { generate } from '../src';
import { expectColorPalette } from './util';

const lightRedColors = generate('#f5222d');
const lightVolcanoColors = generate('#fa541c');
const lightOrangeColors = generate('#fa8c16');
const lightBlueColors = generate('#1677ff');

it('generate red light color', () => {
  expectColorPalette(lightRedColors, '#f5222d');
});

it('generate volcano light color', () => {
  expectColorPalette(lightVolcanoColors, '#fa541c');
});

it('generate orange light color', () => {
  expectColorPalette(lightOrangeColors, '#fa8c16');
});

it('generate blue light color', () => {
  expectColorPalette(lightBlueColors, '#1677ff');
});
