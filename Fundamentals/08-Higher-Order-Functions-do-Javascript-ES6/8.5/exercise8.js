const assert = require('assert');

// escreva greet abaixo
const greet = (name, cump = 'Hi') => `${cump} ${name}`;

assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');
