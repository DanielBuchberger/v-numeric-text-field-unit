import _ from 'lodash';
import type { Unit, QuantityType, Converter } from './types';
import converters from './converters';
import type { NumericTextFieldUnitSettings } from '@/types/unitsettings';

export function useUnitConverter() {
  const convert = <T extends QuantityType>(value: number, type: T, from: Unit<T>, to: Unit<T>): number => {
    const converter = converters.find((item) => item.type == type);
    if (converter == undefined) {
      throw new Error(`converter not found: ${type}`);
    }
    return converter.convert(value, from, to);
  };
  const convertWithSettings = (value: number, settings: NumericTextFieldUnitSettings<QuantityType>) => {
    let fromUnit;
    if (settings.baseUnit == undefined) fromUnit = getSIUnit(settings.type);
    else fromUnit = settings.baseUnit;
    let toUnit;
    if (settings.currentUnit == undefined) toUnit = settings.units[0].unit;
    else toUnit = settings.currentUnit.unit;
    return convert(value, settings.type, fromUnit, toUnit);
  };
  const getSIUnit = (type: QuantityType): Unit<QuantityType> => {
    return getConverter(type).SIUnit;
  };
  const getConverter = (type: QuantityType): Converter<QuantityType> => {
    const converter = converters.find((item) => item.type == type);
    if (converter == undefined) {
      throw new Error(`converter not found: ${type}`);
    }
    return converter;
  };
  const round = (value: number | string, precision?: number): number => {
    if (precision == undefined) precision = 12; // avoid floating point artifacts (https://floating-point-gui.de/)
    return _.round(_.isNumber(value) ? value : Number.parseFloat(value), precision);
  };
  const numberToScientificNotation = ({
    value,
    minExpo,
    maxExpo,
    precision,
  }: {
    value: number | string;
    minExpo?: number;
    maxExpo?: number;
    precision?: number;
  }) => {
    value = _.isString(value) ? parseFloat(value) : value;
    // eslint-disable-next-line prefer-const
    let { coefficient, exponent } = getCoefficientAndExponent(value);
    if (precision != undefined) {
      coefficient = round(coefficient, precision);
    }
    let valueString;
    const scientificNotation = (coeff: number, expo: number) => `${coeff}e${expo}`;
    const decimalNotation = (value: number) => round(value, precision).toString();
    if (minExpo == undefined && maxExpo == undefined) {
      valueString = decimalNotation(value);
    } else if (minExpo != undefined && maxExpo != undefined) {
      valueString = exponent < minExpo && exponent > maxExpo ? scientificNotation(coefficient, exponent) : decimalNotation(value);
    } else if (minExpo != undefined) {
      valueString = exponent < minExpo ? scientificNotation(coefficient, exponent) : decimalNotation(value);
    } else if (maxExpo != undefined) {
      valueString = exponent > maxExpo ? scientificNotation(coefficient, exponent) : decimalNotation(value);
    } else {
      valueString = decimalNotation(value);
    }
    return valueString;
  };
  const getCoefficientAndExponent = (value: number): { coefficient: number; exponent: number } => {
    const [coefficient, exponent] = value
      .toExponential()
      .split('e')
      .map((x) => parseFloat(x));
    return { coefficient, exponent };
  };
  return { convert, convertWithSettings, getSIUnit, numberToScientificNotation, round };
}
