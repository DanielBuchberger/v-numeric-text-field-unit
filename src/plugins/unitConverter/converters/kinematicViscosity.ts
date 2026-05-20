import type { KinematicViscosityUnit } from '../units';

export class KinematicViscosityConverter {
  static convert(value: number, _from: KinematicViscosityUnit, _to: KinematicViscosityUnit): number {
    return value;
  }
}
