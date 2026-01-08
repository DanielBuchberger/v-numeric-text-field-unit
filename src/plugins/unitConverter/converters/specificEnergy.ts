import type { Converter, QuantityType } from '../types';
import type { SpecificEnergyUnit } from '../units';

const convertToSI = (value: number, from: SpecificEnergyUnit): number => {
  switch (from) {
    case 'J/kg':
      return value;
    case 'kJ/kg':
      return value * 1e3;
    case 'MJ/kg':
      return value * 1e6;
    case 'kWh/kg':
      return value * 3600 * 1e3;
    case 'MWh/kg':
      return value * 3600 * 1e6;
    case 'kcal/kg':
      return (value / 0.239) * 1e3;
    default:
      throw Error(`Unknown specific energy unit ${from}`);
  }
};

const convertFromSI = (value: number, to: SpecificEnergyUnit): number => {
  switch (to) {
    case 'J/kg':
      return value;
    case 'kJ/kg':
      return value * 1e-3;
    case 'MJ/kg':
      return value * 1e-6;
    case 'kWh/kg':
      return (value / 3600) * 1e-3;
    case 'MWh/kg':
      return (value / 3600) * 1e-6;
    case 'kcal/kg':
      return value * 0.239 * 1e-3;
    default:
      throw Error(`Unknown specific energy unit ${to}`);
  }
};

const type: QuantityType = 'specificEnergy';

const converter: Converter<typeof type> = {
  type: type,
  SIUnit: 'J/kg',
  convert: (value: number, from: SpecificEnergyUnit, to: SpecificEnergyUnit): number => {
    value = convertToSI(value, from);
    return convertFromSI(value, to);
  },
};

export default converter;
