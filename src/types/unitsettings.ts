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
    { unit: 'm\u00B3/h', precision: 2 },
    { unit: 'm\u00B3/s', precision: 2 },
  ],
};
export const settingsNormVolumeFlow: NumericTextFieldUnitSettings<'volumeflow'> =
  {
    type: 'volumeflow',
    label: 'Norm Volumeflow',
    currentUnit: { unit: 'Nm\u00B3/h', precision: 2 },
    baseUnit: 'Nm\u00B3/s',
    units: [
      { unit: 'Nm\u00B3/h', precision: 2 },
      { unit: 'Nm\u00B3/s', precision: 2 },
    ],
  };
export const settingsDensity: NumericTextFieldUnitSettings<'density'> = {
  type: 'density',
  label: 'Density',
  units: [
    { unit: 'kg/m\u00B3', precision: 2 },
    { unit: 'g/m\u00B3', precision: 2 },
    { unit: 'g/cm\u00B3', precision: 2 },
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
export const settingsTemperature: NumericTextFieldUnitSettings<'temperature'> =
  {
    type: 'temperature',
    label: 'Temperature',
    units: [
      { unit: '\u00B0C', precision: 2 },
      { unit: 'K', precision: 2 },
      { unit: '\u00B0F', precision: 2 },
    ],
  };
export const settingsSpecificEntropy: NumericTextFieldUnitSettings<'specificEntropy'> =
  {
    type: 'specificEntropy',
    label: 'Specific Entropy',
    units: [
      { unit: 'J/kgK', precision: 2 },
      { unit: 'kJ/kgK', precision: 2 },
      { unit: 'MJ/kgK', precision: 2 },
    ],
  };
export const settingsTime: NumericTextFieldUnitSettings<'time'> = {
  type: 'time',
  label: 'Time',
  units: [{ unit: 's', precision: 0 }],
};

export const settingsEnergyFlow: NumericTextFieldUnitSettings<'energyFlow'> = {
  type: 'energyFlow',
  label: 'Energy Flow',
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
    units: [
      { unit: 'W/(m*K)', precision: 0 },
      { unit: 'kW/(m*K)', precision: 0 },
    ],
  };

export const settingsArea: NumericTextFieldUnitSettings<'area'> = {
  type: 'area',
  label: 'Area',
  units: [
    { unit: 'mm²', precision: 0 },
    { unit: 'cm²', precision: 0 },
    { unit: 'm²', precision: 0 },
  ],
};
export const settingsRatio: NumericTextFieldUnitSettings<'ratio'> = {
  type: 'ratio',
  label: 'Ratio',
  units: [{ unit: '%', precision: 4 }],
};
