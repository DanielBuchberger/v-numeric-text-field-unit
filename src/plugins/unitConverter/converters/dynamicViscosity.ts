import type { DynamicViscosityUnit } from '../units';

export class DynamicViscosityConverter {
  static convert(value: number, from: DynamicViscosityUnit, to: DynamicViscosityUnit): number {
    value = this._convertToSI(value, from);
    return this._convertFromSI(value, to);
  }
  static _convertToSI(value: number, from: DynamicViscosityUnit): number {
    switch (from) {
      case 'Pas':
        return value;
      case 'mPas':
        return value * 1e-3;
      case 'µPas':
        return value * 1e-6;
      default:
        throw Error(`Unknown DynamicViscosity unit ${from}`);
    }
  }
  static _convertFromSI(value: number, to: DynamicViscosityUnit): number {
    switch (to) {
      case 'Pas':
        return value;
      case 'mPas':
        return value * 1e3;
      case 'µPas':
        return value * 1e6;
      default:
        throw Error(`Unknown DynamicViscosity unit ${to}`);
    }
  }
}
