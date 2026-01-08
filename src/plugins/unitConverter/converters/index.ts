import type { Converter, QuantityType } from '../types';
import areaConverter from './area';
import pressureConverter from './pressure';
import densityConverter from './density';
import lengthConverter from './length';
import molarEnergyConverter from './molarEnergy';
import molarMassConverter from './molarMass';
import molarVolumeConverter from './molarVolume';
import ratioConverter from './ratio';
import specificEnergyConverter from './specificEnergy';
import specificEntropyConverter from './specificEntropy';
import standardDensityConverter from './standardDensity';
import temperatureConverter from './temperature';
import thermalConductivityConverter from './thermalConductivity';
import volumetricEnergyConverter from './volumetricEnergy';
import massflowConverter from './massflow';
import volumeflowConverter from './volumeflow';
import energyFlowConverter from './energyFlow';
import swellIndexConverter from './swellIndex';
import timeConverter from './time';
import unitlessConverter from './unitless';

const converters: Converter<QuantityType>[] = [
  areaConverter,
  pressureConverter,
  densityConverter,
  lengthConverter,
  molarEnergyConverter,
  molarMassConverter,
  molarVolumeConverter,
  ratioConverter,
  specificEnergyConverter,
  specificEntropyConverter,
  standardDensityConverter,
  temperatureConverter,
  thermalConductivityConverter,
  volumetricEnergyConverter,
  swellIndexConverter,
  massflowConverter,
  volumeflowConverter,
  unitlessConverter,
  energyFlowConverter,
  timeConverter,
];

export default converters;
