export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // code data
  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('err Code must be a String');
    }
    this._code = code;
  }

  get code() {
    return this._code;
  }

  // name data
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('err Name must be a String');
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
