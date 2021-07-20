const assert = require('assert');

const greaterThanTen = (array) => array.filter((x) => x > 10);

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];

assert.deepStrictEqual(greaterThanTen(parameter), result);
