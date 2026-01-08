import type { Converter, QuantityType } from '../types';
import type { DensityUnit } from '../units';

const convertToSI = (value: number, from: DensityUnit): number => {
  switch (from) {
    case 'kg/m³':
      return value;
    case 'g/m³':
      return value * 1e-3;
    case 'g/cm³':
      return value * 1e3;
    default:
      throw Error(`Unknown Density unit ${from}`);
  }
};
const convertFromSI = (value: number, to: DensityUnit): number => {
  switch (to) {
    case 'kg/m³':
      return value;
    case 'g/m³':
      return value * 1e3;
    case 'g/cm³':
      return value * 1e-3;
    default:
      throw Error(`Unknown Density unit ${to}`);
  }
};

const type: QuantityType = 'density';

const converter: Converter<typeof type> = {
  type: type,
  SIUnit: 'kg/m³',
  convert: (value: number, from: DensityUnit, to: DensityUnit): number => {
    value = convertToSI(value, from);
    return convertFromSI(value, to);
  },
};

export default converter;
