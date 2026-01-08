import type { Converter, QuantityType } from '../types';
import type { MolarMassUnit } from '../units';

const convertToSI = (value: number, from: MolarMassUnit): number => {
  switch (from) {
    case 'kg/mol':
      return value;
    case 'g/mol':
    case 'kg/kmol':
      return value * 1e-3;
    default:
      throw Error(`Unknown molar mass unit ${from}`);
  }
};

const convertFromSI = (value: number, to: MolarMassUnit): number => {
  switch (to) {
    case 'kg/mol':
      return value;
    case 'g/mol':
    case 'kg/kmol':
      return value * 1e3;
    default:
      throw Error(`Unknown molar mass unit ${to}`);
  }
};

const type: QuantityType = 'molarMass';

const converter: Converter<typeof type> = {
  type: type,
  SIUnit: 'kg/mol',
  convert: (value: number, from: MolarMassUnit, to: MolarMassUnit): number => {
    value = convertToSI(value, from);
    return convertFromSI(value, to);
  },
};

export default converter;
