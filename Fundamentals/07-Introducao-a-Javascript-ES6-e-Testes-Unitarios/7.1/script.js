'use strict';

// 1
const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
};

testingScope(true);

// 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
oddsAndEvens.sort((a, b) => a - b);
console.log(`Os números ${oddsAndEvens} estão ordenados`); // será necessário alterar essa linha 😉

// 3
const fat = (n) => (n === 0 || n === 1 ? 1 : n * fat(n - 1));

console.log(fat(5));

// 4

function longestWord(statement) {
  const arr = statement.split(' ');

  const red = arr.reduce(
    (acc, cur) => (acc = cur.length > acc.length ? cur : acc),
    arr[0]
  );

  console.log(red);
}

longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'); // retorna 'aconteceu'

// 5
const counter = document.querySelector('.counter');
const btn = document.querySelector('.click');
let clickCount = 0;
counter.textContent = clickCount;

btn.addEventListener('click', function (e) {
  e.preventDefault();
  clickCount++;
  counter.textContent = clickCount;
});

// 6
const getString = (state, word) => state.replace('x', word);
const skills = ['HTML', 'CSS', 'Javascript', 'SASS', 'React'];

const str = getString('Tryber x aqui', 'Matheus');

const concatStrings = (string1, array) => {
  return `${string1}! Minhas cinco principais habilidades são:\n${array
    .sort()
    .join('\n')}`;
};

console.log(concatStrings(str, skills));
