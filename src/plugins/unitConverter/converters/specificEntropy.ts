import type { Converter, QuantityType } from '../types';
import type { SpecificEntropyUnit } from '../units';

const convertToSI = (value: number, from: SpecificEntropyUnit): number => {
  switch (from) {
    case 'J/kgK':
      return value;
    case 'kJ/kgK':
      return value * 1e3;
    case 'MJ/kgK':
      return value * 1e6;
    default:
      throw Error(`Unknown Entropy unit ${from}`);
  }
};

const convertFromSI = (value: number, to: SpecificEntropyUnit): number => {
  switch (to) {
    case 'J/kgK':
      return value;
    case 'kJ/kgK':
      return value * 1e-3;
    case 'MJ/kgK':
      return value * 1e-6;
    default:
      throw Error(`Unknown Entropy unit ${to}`);
  }
};

const type: QuantityType = 'specificEntropy';

const converter: Converter<typeof type> = {
  type: type,
  SIUnit: 'J/kgK',
  convert: (value: number, from: SpecificEntropyUnit, to: SpecificEntropyUnit): number => {
    value = convertToSI(value, from);
    return convertFromSI(value, to);
  },
};

export default converter;
