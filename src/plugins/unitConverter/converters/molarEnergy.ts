import type { Converter, QuantityType } from '../types';
import type { MolarEnergyUnit } from '../units';

const convertToSI = (value: number, from: MolarEnergyUnit): number => {
  switch (from) {
    case 'J/kmol':
      return value * 1e-3;
    case 'J/mol':
    case 'kJ/kmol':
      return value;
    case 'kJ/mol':
    case 'MJ/kmol':
      return value * 1e3;
    case 'MJ/mol':
      return value * 1e6;
    default:
      throw Error(`Unknown molar energy unit ${from}`);
  }
};

const convertFromSI = (value: number, to: MolarEnergyUnit): number => {
  switch (to) {
    case 'J/kmol':
      return value * 1e3;
    case 'J/mol':
    case 'kJ/kmol':
      return value;
    case 'kJ/mol':
    case 'MJ/kmol':
      return value * 1e-3;
    case 'MJ/mol':
      return value * 1e-6;
    default:
      throw Error(`Unknown molar energy unit ${to}`);
  }
};

const type: QuantityType = 'molarEnergy';

const converter: Converter<typeof type> = {
  type: type,
  SIUnit: 'J/mol',
  convert: (value: number, from: MolarEnergyUnit, to: MolarEnergyUnit): number => {
    value = convertToSI(value, from);
    return convertFromSI(value, to);
  },
};

export default converter;
