import type { Converter, QuantityType } from '../types';
import type { TimeUnit } from '../units';

const convertToSI = (value: number, from: TimeUnit): number => {
  switch (from) {
    default:
      return value;
  }
};
const convertFromSI = (value: number, to: TimeUnit): number => {
  switch (to) {
    default:
      return value;
  }
};

const type: QuantityType = 'time';

const converter: Converter<typeof type> = {
  type: type,
  SIUnit: 's',
  convert: (value: number, from: TimeUnit, to: TimeUnit): number => {
    value = convertToSI(value, from);
    return convertFromSI(value, to);
  },
};

export default converter;
