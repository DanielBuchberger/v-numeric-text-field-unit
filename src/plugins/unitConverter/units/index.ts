export const DENSITYUNITS = ['kg/m³', 'g/m³', 'g/cm³'] as const;
export type DensityUnit = (typeof DENSITYUNITS)[number];

export const AREAUNITS = ['m²', 'dm²', 'cm²', 'mm²', 'km²'] as const;
export type AreaUnit = (typeof AREAUNITS)[number];

export const STANDARDDENSITYUNITS = ['kg/Nm³', 'g/Nm³', 'g/Ncm³'] as const;
export type StandardDensityUnit = (typeof STANDARDDENSITYUNITS)[number];

export const DYNAMICVISCOSITYUNITS = ['Pas', 'mPas', 'µPas'] as const;
export type DynamicViscosityUnit = (typeof DYNAMICVISCOSITYUNITS)[number];

export const KINEMATICVISCOSITYUNITS = ['m²/s'] as const;
export type KinematicViscosityUnit = (typeof KINEMATICVISCOSITYUNITS)[number];

export const LENGTHUNITS = ['km', 'm', 'dm', 'cm', 'mm', 'Å'] as const;
export type LengthUnit = (typeof LENGTHUNITS)[number];

export const MOLARENERGYUNITS = ['J/mol', 'J/kmol', 'kJ/mol', 'kJ/kmol', 'MJ/mol', 'MJ/kmol'] as const;
export type MolarEnergyUnit = (typeof MOLARENERGYUNITS)[number];

export const MOLARMASSUNITS = ['kg/mol', 'g/mol', 'kg/kmol'] as const;
export type MolarMassUnit = (typeof MOLARMASSUNITS)[number];

export const MOLARVOLUMEUNITS = ['Nm³/mol', 'm³/mol', 'Nm³/kmol', 'm³/kmol'] as const;
export type MolarVolumeUnit = (typeof MOLARVOLUMEUNITS)[number];

export const PRESSUREUNITS = ['Pa', 'kPa', 'MPa', 'bar', 'mbar', 'atm'] as const;
export type PressureUnit = (typeof PRESSUREUNITS)[number];

export const RATIOUNITS = ['', '%', '‰', 'ppm', 'h/a', '%vol', '%mol', '%mass'] as const;
export type RatioUnit = (typeof RATIOUNITS)[number];

export const SPECIFICENERGYUNITS = ['J/kg', 'kJ/kg', 'MJ/kg', 'kWh/kg', 'MWh/kg', 'kcal/kg'] as const;
export type SpecificEnergyUnit = (typeof SPECIFICENERGYUNITS)[number];

export const SPECIFICENTROPYUNITS = ['J/kgK', 'kJ/kgK', 'MJ/kgK'] as const;
export type SpecificEntropyUnit = (typeof SPECIFICENTROPYUNITS)[number];

export const TEMPERATUREUNITS = ['°C', 'K', '°F'] as const;
export type TemperatureUnit = (typeof TEMPERATUREUNITS)[number];

export const THERMALCONDUCTIVITYUNITS = ['W/(m*K)', 'kW/(m*K)', 'MW/(m*K)', 'GW/(m*K)', 'W/mK', 'kW/mK', 'MW/mK', 'GW/mK'] as const;
export type ThermalConductivityUnit = (typeof THERMALCONDUCTIVITYUNITS)[number];

export const VOLUMETRICENERGYUNITS = ['J/Nm³', 'kJ/Nm³', 'MJ/Nm³', 'kWh/Nm³', 'MWh/Nm³', 'kcal/Nm³'] as const;
export type VolumetricEnergyUnit = (typeof VOLUMETRICENERGYUNITS)[number];

export const SWELLINDEXUNITS = ['m³/kg', 'ml/2g'] as const;
export type SwellIndexUnit = (typeof SWELLINDEXUNITS)[number];

export const MASSFLOWUNITS = ['kg/s', 'kg/h', 't/h'] as const;
export type MassflowUnit = (typeof MASSFLOWUNITS)[number];

export const VOLUMEFLOWUNITS = ['m³/h', 'm³/s', 'Nm³/h', 'Nm³/s'] as const;
export type VolumeFlowUnit = (typeof VOLUMEFLOWUNITS)[number];

export const ENERGYFLOWUNITS = ['W', 'kW', 'MW'] as const;
export type EnergyFlowUnit = (typeof ENERGYFLOWUNITS)[number];

export const TIMEUNIT = ['s'] as const;
export type TimeUnit = (typeof TIMEUNIT)[number];

export const UNITLESS = [''] as const;
export type Unitless = (typeof UNITLESS)[number];
