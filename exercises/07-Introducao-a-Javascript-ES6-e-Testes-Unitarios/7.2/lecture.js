'use strict';
const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const arrKeys = Object.keys(student1);
console.log(arrKeys);

arrKeys.forEach((key) => {
  console.log(`${key}: ${student1[key]}`);
});

console.log(Object.entries(student1));

Object.assign(student1, student2);

console.log(student1);
