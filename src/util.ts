import { TinyColor } from '@ctrl/tinycolor';

export function getRgbStr(color: string) {
  const rgb = new TinyColor(color);
  return `${rgb.r},${rgb.g},${rgb.b}`;
}
