import type { QuantityType, Unit } from '@/plugins/unitConverter/types';

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
  baseUnit: 'm',
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
  baseUnit: 'm³/s',
  units: [
    { unit: 'm³/h', precision: 2 },
    { unit: 'm³/s', precision: 2 },
  ],
};
export const settingsNormVolumeFlow: NumericTextFieldUnitSettings<'volumeflow'> =
  {
    type: 'volumeflow',
    label: 'Norm Volumeflow',
    currentUnit: { unit: 'Nm³/h', precision: 2 },
    baseUnit: 'Nm³/s',
    units: [
      { unit: 'Nm³/h', precision: 2 },
      { unit: 'Nm³/s', precision: 2 },
    ],
  };
export const settingsDensity: NumericTextFieldUnitSettings<'density'> = {
  type: 'density',
  label: 'Density',
  baseUnit: 'kg/m³',
  units: [
    { unit: 'kg/m³', precision: 2 },
    { unit: 'g/m³', precision: 2 },
    { unit: 'g/cm³', precision: 2 },
  ],
};
export const settingsPressure: NumericTextFieldUnitSettings<'pressure'> = {
  type: 'pressure',
  label: 'Pressure',
  baseUnit: 'Pa',
  units: [
    { unit: 'Pa', precision: 2 },
    { unit: 'kPa', precision: 2 },
    { unit: 'MPa', precision: 2 },
    { unit: 'bar', precision: 2 },
    { unit: 'mbar', precision: 2 },
    { unit: 'atm', precision: 2 },
  ],
};
export const settingsTemperature: NumericTextFieldUnitSettings<'temperature'> =
  {
    type: 'temperature',
    label: 'Temperature',
    baseUnit: 'K',
    units: [
      { unit: '°C', precision: 2 },
      { unit: 'K', precision: 2 },
      { unit: '°F', precision: 2 },
    ],
  };
export const settingsSpecificEntropy: NumericTextFieldUnitSettings<'specificEntropy'> =
  {
    type: 'specificEntropy',
    label: 'Specific Entropy',
    baseUnit: 'J/kgK',
    units: [
      { unit: 'J/kgK', precision: 2 },
      { unit: 'kJ/kgK', precision: 2 },
      { unit: 'MJ/kgK', precision: 2 },
    ],
  };
export const settingsTime: NumericTextFieldUnitSettings<'time'> = {
  type: 'time',
  label: 'Time',
  baseUnit: 's',
  units: [{ unit: 's', precision: 0 }],
};

export const settingsEnergyFlow: NumericTextFieldUnitSettings<'energyFlow'> = {
  type: 'energyFlow',
  label: 'Energy Flow',
  baseUnit: 'W',
  units: [
    { unit: 'W', precision: 0 },
    { unit: 'kW', precision: 0 },
    { unit: 'MW', precision: 0 },
  ],
};
export const settingsThermalConductivity: NumericTextFieldUnitSettings<'thermalConductivity'> =
  {
    type: 'thermalConductivity',
    label: 'Thermal Conductivity',
    baseUnit: 'W/(m*K)',
    units: [
      { unit: 'W/(m*K)', precision: 0 },
      { unit: 'kW/(m*K)', precision: 0 },
    ],
  };

export const settingsArea: NumericTextFieldUnitSettings<'area'> = {
  type: 'area',
  label: 'Area',
  baseUnit: 'm²',
  units: [
    { unit: 'mm²', precision: 0 },
    { unit: 'cm²', precision: 0 },
    { unit: 'm²', precision: 0 },
  ],
};
export const settingsRatio: NumericTextFieldUnitSettings<'ratio'> = {
  type: 'ratio',
  label: 'Ratio',
  baseUnit: '',
  units: [{ unit: '%', precision: 4 }],
};
