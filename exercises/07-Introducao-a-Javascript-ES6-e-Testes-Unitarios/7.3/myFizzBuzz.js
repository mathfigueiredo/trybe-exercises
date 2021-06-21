const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

// 1
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz'); // true

// 2
assert.strictEqual(myFizzBuzz(3), 'fizz'); // true

// 3
assert.strictEqual(myFizzBuzz(5), 'buzz'); // true

// 4
assert.strictEqual(myFizzBuzz(4), 4); // true

// 5
assert.strictEqual(myFizzBuzz('string'), false); // true
