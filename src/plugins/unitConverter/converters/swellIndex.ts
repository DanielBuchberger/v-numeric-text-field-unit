import type { Converter, QuantityType } from '../types';
import type { SwellIndexUnit } from '../units';

const convertToSI = (value: number, from: SwellIndexUnit): number => {
  switch (from) {
    case 'm³/kg':
      return value;
    case 'ml/2g':
      return value * 5e-4;
    default:
      throw Error(`Unknown swell index unit ${from}`);
  }
};

const convertFromSI = (value: number, to: SwellIndexUnit): number => {
  switch (to) {
    case 'm³/kg':
      return value;
    case 'ml/2g':
      return value * 2000;
    default:
      throw Error(`Unknown swell index unit ${to}`);
  }
};

const type: QuantityType = 'swellIndex';

const converter: Converter<typeof type> = {
  type: type,
  SIUnit: 'm³/kg',
  convert: (value: number, from: SwellIndexUnit, to: SwellIndexUnit): number => {
    value = convertToSI(value, from);
    return convertFromSI(value, to);
  },
};

export default converter;
