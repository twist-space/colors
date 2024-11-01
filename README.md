<h1 align="center">Colors</h1>

This project is derived from [ant-design-colors](https://github.com/ant-design/ant-design-colors), and is transformed and expanded on this basis.

## Install
```bash
pnpm i @twistify/colors
```

## Usage

### colors

```js
import {
  blue,
  cyan,
  geekblue,
  gold,
  green,
  grey,
  lime,
  magenta,
  purple,
  red,
  volcano,
  yellow,
} from '@twistify/colors';

console.log(blue); // ['#E6F4FF', '#BAE0FF', '#91CAFF', '#69B1FF', '#4096FF', '#1677FF', '#0958D9', '#003EB3', '#002C8C', '#001D66']
console.log(blue.primary); // '#1677FF'
```

```js
import { generate, presetPalettes } from '@twistify/colors';

// Generate color palettes by a given color
const colors = generate('#1890ff');
console.log(colors); // ['#E6F7FF', '#BAE7FF', '#91D5FF', ''#69C0FF', '#40A9FF', '#1890FF', '#096DD9', '#0050B3', '#003A8C', '#002766']
console.log(presetPalettes);
/*
{
  red: [...],
  volcano: [...],
  orange: [...],
  gold: [...],
  yellow: [...],
  lime: [...],
  green: [...],
  cyan: [...],
  blue: [...],
  geekblue: [...],
  purple: [...],
  magenta: [...],
}
*/
```
### generate
```js
import { generate, presetDarkPalettes } from '@twistify/colors';

// Generate dark color palettes by a given color
const colors = generate('#1890ff', {
  dark: true,
  backgroundColor: '#141414',
});
console.log(colors); // ['#111d2c', '#112a45', '#15395b', '#164c7e', '#1765ad', '#177ddc', '#3c9ae8', '#65b7f3', '#8dcff8', '#b7e3fa']
console.log(presetDarkPalettes);
/*
{
  red: [...],
  volcano: [...],
  orange: [...],
  gold: [...],
  yellow: [...],
  lime: [...],
  green: [...],
  cyan: [...],
  blue: [...],
  geekblue: [...],
  purple: [...],
  magenta: [...],
}
*/
```

### Get a single color
Enter a primary color and index, return a step color of a primary color. You can use [light palettes](https://ant.design/docs/spec/colors) and [dark palettes](https://ant.design/docs/spec/dark) contrast return value.

```js
import { colorPalette, darkColorPalette, generateColor } from '@twistify/colors';

// light color
const lightColor1 = generateColor('#1677ff', { index: 1 }); // #e6f4ff
// or
const lightColor2 = colorPalette('#1677ff', 1); // #e6f4ff

// dark color
const darkColor1 = generateColor('#1677ff', { index: 1, dark: true }); // #111a2c
// or
const darkColor2 = darkColorPalette('#1677ff', 1); // #111a2c
```

### Util
```js
import { getRgbStr } from '@twistify/colors';

console.log(getRgbStr('#ffffff')); // 255,255,255
console.log(getRgbStr('#121212')); // 18,18,18
```

### Credits
This project inspired by `ant-design-color`、`arco-design-color`.

- [ant-design-color](https://github.com/ant-design/ant-design-colors)
- [arco-design-color](https://github.com/arco-design/color)
