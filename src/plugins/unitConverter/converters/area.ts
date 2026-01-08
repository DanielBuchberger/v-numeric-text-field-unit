import type { Converter, QuantityType } from '../types';
import type { AreaUnit } from '../units';

const convertToSI = (value: number, from: AreaUnit): number => {
  switch (from) {
    case 'dm²':
      return value * 1e-2;
    case 'cm²':
      return value * 1e-4;
    case 'mm²':
      return value * 1e-6;
    case 'km²':
      return value * 1e6;
    case 'm²':
      return value;
    default:
      throw Error(`Unknown Area unit ${from}`);
  }
};
const convertFromSI = (value: number, to: AreaUnit): number => {
  switch (to) {
    case 'dm²':
      return value * 1e2;
    case 'cm²':
      return value * 1e4;
    case 'mm²':
      return value * 1e6;
    case 'km²':
      return value * 1e-6;
    case 'm²':
      return value;
    default:
      throw Error(`Unknown Area unit ${to}`);
  }
};

const type: QuantityType = 'area';

const converter: Converter<typeof type> = {
  type: type,
  SIUnit: 'm²',
  convert: (value: number, from: AreaUnit, to: AreaUnit): number => {
    value = convertToSI(value, from);
    return convertFromSI(value, to);
  },
};

export default converter;
