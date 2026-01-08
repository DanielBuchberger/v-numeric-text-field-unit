import type { Converter, QuantityType } from '../types';
import type { EnergyFlowUnit } from '../units';

const convertToSI = (value: number, from: EnergyFlowUnit): number => {
  switch (from) {
    case 'W':
      return value;
    case 'kW':
      return value * 1e3;
    case 'MW':
      return value * 1e6;
    default:
      throw Error(`Unknown length unit ${from}`);
  }
};

const convertFromSI = (value: number, to: EnergyFlowUnit): number => {
  switch (to) {
    case 'W':
      return value;
    case 'kW':
      return value * 1e-3;
    case 'MW':
      return value * 1e-6;
    default:
      throw Error(`Unknown length unit ${to}`);
  }
};

const type: QuantityType = 'energyFlow';

const converter: Converter<typeof type> = {
  type: type,
  SIUnit: 'W',
  convert: (value: number, from: EnergyFlowUnit, to: EnergyFlowUnit): number => {
    value = convertToSI(value, from);
    return convertFromSI(value, to);
  },
};

export default converter;
