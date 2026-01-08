import type { Converter, QuantityType } from '../types';
import type { RatioUnit } from '../units';

const convertToSI = (value: number, from: RatioUnit): number => {
  switch (from) {
    case '':
      return value;
    case '%':
    case '%vol':
    case '%mass':
    case '%mol':
      return value * 1e-2;
    case '‰':
      return value * 1e-3;
    case 'ppm':
      return value * 1e-6;
    case 'h/a':
      return value / 8760.0;
    default:
      throw Error(`Unknown ratio unit ${from}`);
  }
};
const convertFromSI = (value: number, to: RatioUnit): number => {
  switch (to) {
    case '':
      return value;
    case '%':
    case '%vol':
    case '%mass':
    case '%mol':
      return value * 1e2;
    case '‰':
      return value * 1e3;
    case 'ppm':
      return value * 1e6;
    case 'h/a':
      return value * 8760;
    default:
      throw Error(`Unknown ratio unit ${to}`);
  }
};

const type: QuantityType = 'ratio';

const converter: Converter<typeof type> = {
  type: type,
  SIUnit: '',
  convert: (value: number, from: RatioUnit, to: RatioUnit): number => {
    value = convertToSI(value, from);
    return convertFromSI(value, to);
  },
};

export default converter;
