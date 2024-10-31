import { TinyColor } from '@ctrl/tinycolor';

export function getRgbStr(color: string) {
  return new TinyColor(color).toRgbString();
}
