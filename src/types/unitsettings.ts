import type { QuantityType, Unit } from '../plugins/types';

export interface NumericTextFieldUnitSettings<T extends QuantityType> {
  type: T;
  label?: string;
  min?: number;
  max?: number;
  baseUnit?: Unit<T>;
  currentUnit?: UnitSettings<T>;
  units: UnitSettings<T>[];
}

export interface UnitSettings<T extends QuantityType> {
  unit: Unit<T>;
  precision?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

export const settingsLength: NumericTextFieldUnitSettings<'length'> = {
  type: 'length',
  label: 'Length',
  units: [
    { unit: 'm', precision: 4 },
    { unit: 'dm', precision: 3 },
    { unit: 'cm', precision: 2 },
    { unit: 'mm', precision: 1 },
  ],
};

export const settingsMassFlow: NumericTextFieldUnitSettings<'massflow'> = {
  type: 'massflow',
  label: 'Massflow',
  baseUnit: 'kg/s',
  units: [
    { unit: 't/h', precision: 2 },
    { unit: 'kg/s', precision: 2 },
    { unit: 'kg/h', precision: 2 },
  ],
};

export const settingsVolumeFlow: NumericTextFieldUnitSettings<'volumeflow'> = {
  type: 'volumeflow',
  label: 'Volumeflow',
  units: [
    { unit: 'm³/h', precision: 2 },
    { unit: 'm³/s', precision: 2 },
  ],
};

export const settingsPressure: NumericTextFieldUnitSettings<'pressure'> = {
  type: 'pressure',
  label: 'Pressure',
  units: [
    { unit: 'Pa', precision: 2 },
    { unit: 'kPa', precision: 2 },
    { unit: 'MPa', precision: 2 },
    { unit: 'bar', precision: 2 },
    { unit: 'mbar', precision: 2 },
    { unit: 'atm', precision: 2 },
  ],
};

export const settingsTemperature: NumericTextFieldUnitSettings<'temperature'> = {
  type: 'temperature',
  label: 'Temperature',
  units: [
    { unit: '°C', precision: 2 },
    { unit: 'K', precision: 2 },
    { unit: '°F', precision: 2 },
  ],
};

export const settingsDensity: NumericTextFieldUnitSettings<'density'> = {
  type: 'density',
  label: 'Density',
  units: [
    { unit: 'kg/m³', precision: 2 },
    { unit: 'g/m³', precision: 2 },
    { unit: 'g/cm³', precision: 2 },
  ],
};