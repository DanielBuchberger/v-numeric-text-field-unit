import type {
  DensityUnit,
  AreaUnit,
  DynamicViscosityUnit,
  SpecificEnergyUnit,
  SpecificEntropyUnit,
  KinematicViscosityUnit,
  LengthUnit,
  PressureUnit,
  TemperatureUnit,
  ThermalConductivityUnit,
  RatioUnit,
  MolarMassUnit,
  MolarVolumeUnit,
  VolumetricEnergyUnit,
  MolarEnergyUnit,
  StandardDensityUnit,
  MassflowUnit,
  SwellIndexUnit,
  VolumeFlowUnit,
  EnergyFlowUnit,
  TimeUnit,
  Unitless,
} from './units';

export type QuantityType =
  | 'massflow'
  | 'volumeflow'
  | 'area'
  | 'density'
  | 'standardDensity'
  | 'dynamicViscosity'
  | 'kinematicViscosity'
  | 'length'
  | 'molarEnergy'
  | 'molarMass'
  | 'molarVolume'
  | 'pressure'
  | 'ratio'
  | 'specificEnergy'
  | 'specificEntropy'
  | 'temperature'
  | 'thermalConductivity'
  | 'volumetricEnergy'
  | 'energyFlow'
  | 'swellIndex'
  | 'time'
  | 'unitless';

export type Unit<T extends QuantityType> = T extends 'thermalConductivity'
  ? ThermalConductivityUnit
  : T extends 'area'
    ? AreaUnit
    : T extends 'volumeflow'
      ? VolumeFlowUnit
      : T extends 'massflow'
        ? MassflowUnit
        : T extends 'density'
          ? DensityUnit
          : T extends 'standardDensity'
            ? StandardDensityUnit
            : T extends 'dynamicViscosity'
              ? DynamicViscosityUnit
              : T extends 'kinematicViscosity'
                ? KinematicViscosityUnit
                : T extends 'length'
                  ? LengthUnit
                  : T extends 'molarEnergy'
                    ? MolarEnergyUnit
                    : T extends 'molarMass'
                      ? MolarMassUnit
                      : T extends 'molarVolume'
                        ? MolarVolumeUnit
                        : T extends 'pressure'
                          ? PressureUnit
                          : T extends 'specificEnergy'
                            ? SpecificEnergyUnit
                            : T extends 'specificEntropy'
                              ? SpecificEntropyUnit
                              : T extends 'temperature'
                                ? TemperatureUnit
                                : T extends 'ratio'
                                  ? RatioUnit
                                  : T extends 'volumetricEnergy'
                                    ? VolumetricEnergyUnit
                                    : T extends 'swellIndex'
                                      ? SwellIndexUnit
                                      : T extends 'energyFlow'
                                        ? EnergyFlowUnit
                                        : T extends 'time'
                                          ? TimeUnit
                                          : T extends 'unitless'
                                            ? Unitless
                                            : never;

export interface Converter<T extends QuantityType> {
  type: T;
  SIUnit: Unit<T>;
  convert: (value: number, from: Unit<T>, to: Unit<T>) => number;
}
