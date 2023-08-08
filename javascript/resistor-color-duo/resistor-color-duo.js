import { COLORS, colorCode } from '../resistor-color/resistor-color.js';

export function decodedValue(colorNames) {
  return Number(`${colorCode(colorNames[0])}${colorCode(colorNames[1])}`);
}
