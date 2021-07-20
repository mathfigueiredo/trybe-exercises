'use strict';

// LECTURE
// == OBJECTS ===
let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: { golden: 2, silver: 3 },
};

console.log(
  `A jogadora ${player.name} ${player.lastName} tem ${player.age} anos`
);

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log(
  `A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${player.bestInTheWorld.length} vezes`
);
console.log(
  `A jogadora ${player.name} ${player.lastName} possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata`
);

// === FOR/IN ===
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (let index in names) {
  console.log(`Olá ${names[index]}`);
}

let cars = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020,
};

for (let i in cars) {
  console.log(i, cars[i]);
}

// EXERCISES
console.log(`\n=== EXERCISES ===`);
console.log(`-- Parte I --`);
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log(`Bem-vinda, ${info.personagem}`);

info.recorrente = 'Sim';

console.log(info);

for (let i in info) {
  console.log(i);
}

for (let i in info) {
  console.log(info[i]);
}

let info2 = {
  personagem: 'Tio Patinhas',
  origem: `Christmas on Bear Mountain, Dell's Four Color Comics #178`,
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let i in info) {
  console.log(
    info[i] === info2[i] ? `Ambos ${i}s` : `${info[i]} e ${info2[i]}`
  );
}

console.log(`\n-- Parte II --`);

function isPalindrome(word) {
  const w = word;
  let wc = '';
  for (let i = w.length - 1; i >= 0; i--) {
    wc += w[i];
  }
  return w === wc ? true : false;
}

console.log(isPalindrome('123654456321'));
