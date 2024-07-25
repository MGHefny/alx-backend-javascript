export default class HolbertonClass {
  constructor(size, location) {
    // err masseg size
    if (typeof size !== 'number') {
      throw new TypeError('err Size must be a number');
    }
    // err masseg location
    if (typeof location !== 'string') {
      throw new TypeError('err Location must be a string');
    }
    this._size = size;
    this._location = location;
  }

  // size data
  valueOf() {
    return this._size;
  }

  // location data
  toString() {
    return this._location;
  }
}
