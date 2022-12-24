export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size === 'number') {
      this._size = size;
    }
    if (typeof location === 'string') {
      this._location = location;
    }
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  set size(num) {
    this._size = num;
  }

  set location(str) {
    this._location = str;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.size;
    }
    if (hint === 'string') {
      return this.location;
    }
    return this;
  }
}
