export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    }
    if (typeof length === 'number') {
      this._length = length;
    }
    if (Array.isArray(students)) {
      this._students = students;
    }
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(name) {
    if (typeof str === 'string') {
      this._name = name;
    }
    throw new TypeError('Name must be a string');
  }

  set length(num) {
    if (typeof num === 'number') {
      this._length = num;
    }
    throw new TypeError('Length must be a number');
  }

  set students(arr) {
    if (Array.isArray(arr)) {
      this._students = arr;
    }
    throw new TypeError('Students must be an array of strings');
  }
}
