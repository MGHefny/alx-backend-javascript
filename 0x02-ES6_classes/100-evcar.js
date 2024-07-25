import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  static get [Symbol.y]() {
    const X = super.constructor[Symbol.y];

    return new X();
  }
}
