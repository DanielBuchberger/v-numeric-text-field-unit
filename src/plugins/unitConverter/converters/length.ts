import type { Converter, QuantityType } from '../types';
import type { LengthUnit } from '../units';

const convertToSI = (value: number, from: LengthUnit): number => {
  switch (from) {
    case 'm':
      return value;
    case 'dm':
      return value * 1e-1;
    case 'cm':
      return value * 1e-2;
    case 'mm':
      return value * 1e-3;
    case 'Å':
      return value * 1e-10;
    case 'km':
      return value * 1e3;
    default:
      throw Error(`Unknown length unit ${from}`);
  }
};

const convertFromSI = (value: number, to: LengthUnit): number => {
  switch (to) {
    case 'm':
      return value;
    case 'dm':
      return value * 1e1;
    case 'cm':
      return value * 1e2;
    case 'mm':
      return value * 1e3;
    case 'Å':
      return value * 1e10;
    case 'km':
      return value * 1e-3;
    default:
      throw Error(`Unknown length unit ${to}`);
  }
};

const type: QuantityType = 'length';

const converter: Converter<typeof type> = {
  type: type,
  SIUnit: 'm',
  convert: (value: number, from: LengthUnit, to: LengthUnit): number => {
    value = convertToSI(value, from);
    return convertFromSI(value, to);
  },
};

export default converter;
