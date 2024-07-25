export default class Airport {
  constructor(name, code) {
    // name data
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    // code data
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._name = name;
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
