const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
assert.strictEqual(sum(5, 4), 9); // true
assert.strictEqual(sum(0, 0), 0); // true
assert.strictEqual(sum(4, '5'), 9); // ERRO: parameters must be numbers
