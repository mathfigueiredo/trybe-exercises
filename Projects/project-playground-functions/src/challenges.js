// MATHEUS SOARES DE FIGUEIREDO
// Helper functions

function noDiv(num, count) {
  if (num % 3 !== 0 && num % 5 !== 0) {
    count.push('bug!');
  }
}

function divOr(num, count) {
  if (num % 5 === 0 && num % 3 !== 0) {
    count.push('buzz');
  }
  if (num % 3 === 0 && num % 5 !== 0) {
    count.push('fizz');
  }
}

function divBoth(num, count) {
  if (num % 3 === 0 && num % 5 === 0) {
    count.push('fizzBuzz');
  }
}

// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
}

// Desafio 4
function concatName(arr) {
  // seu código aqui
  return `${arr[arr.length - 1]}, ${arr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(arr) {
  // seu código aqui
  let max = arr.reduce((acc, cur) => (cur > acc ? cur : acc), arr[0]);
  let count = 0;
  for (let i = 0; i < arr.length; i += 1) {
    count = arr[i] === max ? (count += 1) : count;
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  }
  if (cat1 - mouse < cat2 - mouse) return 'cat1';
  if (cat2 - mouse < cat1 - mouse) return 'cat2';
}

// Desafio 8
function fizzBuzz(arr) {
  // seu código aqui
  const out = [];
  for (let i = 0; i < arr.length; i += 1) {
    divBoth(arr[i], out);
    divOr(arr[i], out);
    noDiv(arr[i], out);
  }
  return out;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let encoded = string
    .replace(/a/g, '1')
    .replace(/e/g, '2')
    .replace(/i/g, '3')
    .replace(/o/g, '4')
    .replace(/u/g, '5');
  return encoded;
}
function decode(string) {
  // seu código aqui
  let decoded = string
    .replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');
  return decoded;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
