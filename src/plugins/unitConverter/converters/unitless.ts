import type { Converter, QuantityType } from '../types';
import type { Unitless } from '../units';

const convertToSI = (value: number, from: Unitless): number => {
  switch (from) {
    default:
      return value;
  }
};
const convertFromSI = (value: number, to: Unitless): number => {
  switch (to) {
    default:
      return value;
  }
};

const type: QuantityType = 'unitless';

const converter: Converter<typeof type> = {
  type: type,
  SIUnit: '',
  convert: (value: number, from: Unitless, to: Unitless): number => {
    value = convertToSI(value, from);
    return convertFromSI(value, to);
  },
};

export default converter;
