import type { Converter, QuantityType } from '../types';
import type { MassflowUnit } from '../units';

const convertToSI = (value: number, from: MassflowUnit): number => {
  switch (from) {
    case 'kg/s':
      return value;
    case 'kg/h':
      return value / 3600;
    case 't/h':
      return value / 3.6;
    default:
      throw Error(`Unknown Massflow unit ${from}`);
  }
};
const convertFromSI = (value: number, to: MassflowUnit): number => {
  switch (to) {
    case 'kg/s':
      return value;
    case 'kg/h':
      return value * 3600;
    case 't/h':
      return value * 3.6;
    default:
      throw Error(`Unknown Massflow unit ${to}`);
  }
};

const type: QuantityType = 'massflow';

const converter: Converter<typeof type> = {
  type: type,
  SIUnit: 'kg/s',
  convert: (value: number, from: MassflowUnit, to: MassflowUnit): number => {
    value = convertToSI(value, from);
    return convertFromSI(value, to);
  },
};

export default converter;
