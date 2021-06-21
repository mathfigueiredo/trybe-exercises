const assert = require('assert');
// escreva a função sumAllNumbers aqui
const sumAllNumbers = (arr) => arr.reduce((acc, cur) => acc + cur, 0);

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);
