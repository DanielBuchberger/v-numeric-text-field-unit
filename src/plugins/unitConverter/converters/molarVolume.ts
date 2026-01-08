import type { Converter, QuantityType } from '../types';
import type { MolarVolumeUnit } from '../units';

const convertToSI = (value: number, from: MolarVolumeUnit): number => {
  switch (from) {
    case 'Nm³/mol':
    case 'm³/mol':
      return value;
    case 'Nm³/kmol':
    case 'm³/kmol':
      return value * 1e-3;
    default:
      throw Error(`Unknown molar volume unit ${from}`);
  }
};

const convertFromSI = (value: number, to: MolarVolumeUnit): number => {
  switch (to) {
    case 'Nm³/mol':
    case 'm³/mol':
      return value;
    case 'Nm³/kmol':
    case 'm³/kmol':
      return value * 1e3;
    default:
      throw Error(`Unknown molar volume unit ${to}`);
  }
};

const type: QuantityType = 'molarVolume';

const converter: Converter<typeof type> = {
  type: type,
  SIUnit: 'Nm³/mol',
  convert: (value: number, from: MolarVolumeUnit, to: MolarVolumeUnit): number => {
    value = convertToSI(value, from);
    return convertFromSI(value, to);
  },
};

export default converter;
