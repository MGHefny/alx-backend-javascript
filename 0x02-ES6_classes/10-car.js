export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.y]() {
    return this.prototype.constructor;
  }

  cloneCar() {
    const X = this.constructor[Symbol.y];
    return new X();
  }
}
