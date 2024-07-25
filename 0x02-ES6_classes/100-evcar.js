import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  set range(x) {
    this._range = x;
  }

  cloneCar() {
    const Z = super.constructor[Symbol.y];

    return new Z();
  }
}
