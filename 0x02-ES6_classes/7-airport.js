export default class Airport {
  constructor(name, code) {
    if (typeof name === 'string') {
      this._name = name;
    }
    if (typeof code === 'string') {
      this._code = code;
    }
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }

  set name(str) {
    this._name = str;
  }

  set code(value) {
    this._code = value;
  }
}
