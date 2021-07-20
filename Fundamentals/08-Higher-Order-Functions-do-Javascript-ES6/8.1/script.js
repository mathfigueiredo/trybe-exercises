'use strict';

// 1
const newObj = (nomeCompleto) => {
  const email = `${nomeCompleto.split(' ').join('_')}@trybe.com`;

  return new Object({ nomeCompleto, email });
};

const newEmployees = () => {
  const employees = {
    id1: newObj('Pedro Guerra').email, // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: newObj('Luiza Drumond').email, // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: newObj('Carla Paiva').email, // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

console.log(newEmployees());

// 2
const sorteio = (n) => {
  const num = Math.ceil(Math.random() * 5);
  return n === num ? 'Parabéns! Você ganhou!' : 'Tente novamente!';
};

console.log(sorteio(3));

// 3
const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAns = (gab, alumni) => {
  let grade = 0;
  for (let i = 0; i < gab.length; i++) {
    if (alumni[i] === gab[i]) grade++;
    else if (alumni[i] === 'N.A') continue;
    else grade -= 0.5;
  }
  return grade;
};

const calcGrades = (gabarito, respostas, checkfunction) =>
  checkfunction(gabarito, respostas);

console.log(calcGrades(rightAnswers, studentAnswers, checkAns));
