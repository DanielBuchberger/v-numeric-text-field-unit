import type { Converter, QuantityType } from '../types';
import type { ThermalConductivityUnit } from '../units';

const convertToSI = (value: number, from: ThermalConductivityUnit): number => {
  switch (from) {
    case 'W/mK':
    case 'W/(m*K)':
      return value;
    case 'kW/mK':
    case 'kW/(m*K)':
      return value * 1e3;
    case 'MW/mK':
    case 'MW/(m*K)':
      return value * 1e6;
    case 'GW/mK':
    case 'GW/(m*K)':
      return value * 1e9;
    default:
      throw Error(`Unknown ThermalConductivity unit ${from}`);
  }
};
const convertFromSI = (value: number, to: ThermalConductivityUnit): number => {
  switch (to) {
    // case 'W/mK':
    case 'W/(m*K)':
      return value;
    case 'kW/mK':
    case 'kW/(m*K)':
      return value * 1e-3;
    case 'MW/mK':
    case 'MW/(m*K)':
      return value * 1e-6;
    case 'GW/mK':
    case 'GW/(m*K)':
      return value * 1e-9;
    default:
      throw Error(`Unknown ThermalConductivity unit ${to}`);
  }
};

const type: QuantityType = 'thermalConductivity';

const converter: Converter<typeof type> = {
  type: type,
  SIUnit: 'W/(m*K)',
  convert: (value: number, from: ThermalConductivityUnit, to: ThermalConductivityUnit): number => {
    value = convertToSI(value, from);
    return convertFromSI(value, to);
  },
};

export default converter;
