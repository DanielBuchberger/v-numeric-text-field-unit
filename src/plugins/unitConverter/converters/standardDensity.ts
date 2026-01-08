import type { Converter, QuantityType } from '../types';
import type { StandardDensityUnit } from '../units';

const convertToSI = (value: number, from: StandardDensityUnit): number => {
  switch (from) {
    case 'kg/Nm³':
      return value;
    case 'g/Nm³':
      return value * 1e-3;
    case 'g/Ncm³':
      return value * 1e3;
    default:
      throw Error(`Unknown Density unit ${from}`);
  }
};
const convertFromSI = (value: number, to: StandardDensityUnit): number => {
  switch (to) {
    case 'kg/Nm³':
      return value;
    case 'g/Nm³':
      return value * 1e3;
    case 'g/Ncm³':
      return value * 1e-3;
    default:
      throw Error(`Unknown Density unit ${to}`);
  }
};

const type: QuantityType = 'standardDensity';

const converter: Converter<typeof type> = {
  type: type,
  SIUnit: 'kg/Nm³',
  convert: (value: number, from: StandardDensityUnit, to: StandardDensityUnit): number => {
    value = convertToSI(value, from);
    return convertFromSI(value, to);
  },
};

export default converter;
