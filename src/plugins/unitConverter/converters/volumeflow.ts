import type { Converter, QuantityType } from '../types';
import type { VolumeFlowUnit } from '../units';

const convertToSI = (value: number, from: VolumeFlowUnit): number => {
  switch (from) {
    case 'Nm\u00B3/s':
    case 'm\u00B3/s':
      return value;
    case 'Nm\u00B3/h':
    case 'm\u00B3/h':
      return value / 3600;
    default:
      throw Error(`Unknown VolumeFlow unit ${from}`);
  }
};
const convertFromSI = (value: number, to: VolumeFlowUnit): number => {
  switch (to) {
    case 'm\u00B3/h':
    case 'Nm\u00B3/h':
      return value * 3600;
    case 'Nm\u00B3/s':
    case 'm\u00B3/s':
      return value;
    default:
      throw Error(`Unknown VolumeFlow unit ${to}`);
  }
};

const type: QuantityType = 'volumeflow';

const converter: Converter<typeof type> = {
  type: type,
  SIUnit: 'm\u00B3/s',
  convert: (value: number, from: VolumeFlowUnit, to: VolumeFlowUnit): number => {
    value = convertToSI(value, from);
    return convertFromSI(value, to);
  },
};

export default converter;
