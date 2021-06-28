const assert = require('assert');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA() {
  const num = names.reduce((acc, cur) => {
    for (let i = 0; i < cur.length; i++) {
      if (cur[i] === 'a' || cur[i] === 'A') acc++;
    }

    return acc;
  }, 0);
  return num;
}

assert.deepStrictEqual(containsA(), 20);
