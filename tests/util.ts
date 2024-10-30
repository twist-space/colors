import { expect } from 'vitest';
import { colorPalette, darkColorPalette, type Palette } from '../src';

export function expectColorPalette(patterns: Palette, primaryColor: string, dark?: boolean) {
  patterns.forEach((color, ci) => {
    const index = ci + 1;
    const res = dark ? darkColorPalette(primaryColor, index) : colorPalette(primaryColor, index);
    expect(res).toBe(color);
  });
}
