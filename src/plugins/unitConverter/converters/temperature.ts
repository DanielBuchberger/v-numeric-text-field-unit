import type { Converter, QuantityType } from '../types';
import type { TemperatureUnit } from '../units';

const convertToSI = (value: number, from: TemperatureUnit): number => {
  switch (from) {
    case 'K':
      return value;
    case '°C':
      return value + 273.15;
    case '°F':
      return (value - 32) / 1.8 + 273.15;
    default:
      throw Error(`Unknown Temperature unit ${from}`);
  }
};
const convertFromSI = (value: number, to: TemperatureUnit): number => {
  switch (to) {
    case 'K':
      return value;
    case '°C':
      return value - 273.15;
    case '°F':
      return (value - 273.15) * 1.8 + 32;
    default:
      throw Error(`Unknown Temperature unit ${to}`);
  }
};

const type: QuantityType = 'temperature';

const converter: Converter<typeof type> = {
  type: type,
  SIUnit: 'K',
  convert: (value: number, from: TemperatureUnit, to: TemperatureUnit): number => {
    value = convertToSI(value, from);
    return convertFromSI(value, to);
  },
};

export default converter;
