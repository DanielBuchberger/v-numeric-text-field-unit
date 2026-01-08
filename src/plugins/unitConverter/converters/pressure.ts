import type { Converter, QuantityType } from '../types';
import type { PressureUnit } from '../units';

const convertToSI = (value: number, from: PressureUnit): number => {
  switch (from) {
    case 'Pa':
      return value;
    case 'kPa':
      return value * 1e3;
    case 'MPa':
      return value * 1e6;
    case 'bar':
      return value * 1e5;
    case 'mbar':
      return value * 1e2;
    case 'atm':
      return value * 101325;
    default:
      throw Error(`Unknown Pressure unit ${from}`);
  }
};
const convertFromSI = (value: number, to: PressureUnit): number => {
  switch (to) {
    case 'Pa':
      return value;
    case 'kPa':
      return value * 1e-3;
    case 'MPa':
      return value * 1e-6;
    case 'bar':
      return value * 1e-5;
    case 'mbar':
      return value * 1e-2;
    case 'atm':
      return value / 101325;
    default:
      throw Error(`Unknown Pressure unit ${to}`);
  }
};

const type: QuantityType = 'pressure';

const converter: Converter<typeof type> = {
  type: type,
  SIUnit: 'Pa',
  convert: (value: number, from: PressureUnit, to: PressureUnit): number => {
    value = convertToSI(value, from);
    return convertFromSI(value, to);
  },
};

export default converter;
