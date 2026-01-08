import type { Converter, QuantityType } from '../types';
import type { VolumetricEnergyUnit } from '../units';

const convertToSI = (value: number, from: VolumetricEnergyUnit): number => {
  switch (from) {
    case 'J/Nm³':
      return value;
    case 'kJ/Nm³':
      return value * 1e3;
    case 'MJ/Nm³':
      return value * 1e6;
    case 'kWh/Nm³':
      return value * 3600 * 1e3;
    case 'MWh/Nm³':
      return value * 3600 * 1e6;
    case 'kcal/Nm³':
      return (value / 0.239) * 1e3;
    default:
      throw Error(`Unknown volumetric energy unit ${from}`);
  }
};

const convertFromSI = (value: number, to: VolumetricEnergyUnit): number => {
  switch (to) {
    case 'J/Nm³':
      return value;
    case 'kJ/Nm³':
      return value * 1e-3;
    case 'MJ/Nm³':
      return value * 1e-6;
    case 'kWh/Nm³':
      return (value / 3600) * 1e-3;
    case 'MWh/Nm³':
      return (value / 3600) * 1e-6;
    case 'kcal/Nm³':
      return value * 0.239 * 1e-3;
    default:
      throw Error(`Unknown specific energy unit ${to}`);
  }
};

const type: QuantityType = 'volumetricEnergy';

const converter: Converter<typeof type> = {
  type: type,
  SIUnit: 'J/Nm³',
  convert: (value: number, from: VolumetricEnergyUnit, to: VolumetricEnergyUnit): number => {
    value = convertToSI(value, from);
    return convertFromSI(value, to);
  },
};

export default converter;
