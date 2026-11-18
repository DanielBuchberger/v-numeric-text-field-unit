import type { Converter, QuantityType } from '../types';
import type { MolarEntropyUnit } from '../units';

const convertToSI = (value: number, from: MolarEntropyUnit): number => {
  switch (from) {
    case 'J/kmolK':
      return value * 1e-3;
    case 'J/molK':
    case 'kJ/kmolK':
      return value;
    case 'kJ/molK':
      return value * 1e3;
    default:
      throw Error(`Unknown molar entropy unit ${from}`);
  }
};

const convertFromSI = (value: number, to: MolarEntropyUnit): number => {
  switch (to) {
    case 'J/kmolK':
      return value * 1e3;
    case 'J/molK':
    case 'kJ/kmolK':
      return value;
    case 'kJ/molK':
      return value * 1e-3;
    default:
      throw Error(`Unknown molar entropy unit ${to}`);
  }
};

const type: QuantityType = 'molarEntropy';

const converter: Converter<typeof type> = {
  type: type,
  SIUnit: 'J/molK',
  convert: (value: number, from: MolarEntropyUnit, to: MolarEntropyUnit): number => {
    value = convertToSI(value, from);
    return convertFromSI(value, to);
  },
};

export default converter;
