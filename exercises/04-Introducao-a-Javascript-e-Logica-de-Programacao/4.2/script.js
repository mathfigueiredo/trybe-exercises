'use strict';
// LECTURE
console.log(`== LECTURE ==========`);
// 1
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
console.log(menuServices);

// 2
let indexOfPortfolio = menu.indexOf('Portfólio');
console.log(indexOfPortfolio);

// 3
menu.push('Contato');
console.log(menu);

// 4
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (let i = 0; i < groceryList.length; i++) {
  console.log(groceryList[i]);
}

// 5
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let name of names) {
  console.log(name);
}

// EXERCÍCIOS
console.log(`== EXERCÍCIOS ==========`);
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1
console.log(`1 ---`);
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
console.log(`\n`);

// 2
console.log(`2 ---`);
const numbersSoma = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(`Soma: ${numbersSoma}`);
console.log(`\n`);

// 3
console.log(`3 ---`);
const numbersMedia = numbersSoma / numbers.length;
console.log(`Média: ${numbersMedia}`);
console.log(`\n`);

// 4
console.log(`4 ---`);
console.log(
  numbersMedia > 20 ? `valor maior que 20` : `valor menor ou igual a 20`
);
console.log(`\n`);

// 5
console.log(`5 ---`);
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  max = numbers[i] > max ? numbers[i] : max;
}
console.log(`Maior número: ${max}`);
console.log(`\n`);

// 6
console.log(`6 ---`);
const numbersOdd = numbers.filter((a) => a % 2 !== 0);
console.log(
  numbersOdd.length > 0
    ? `${numbersOdd.length} valores ímpares encontrados`
    : `nenhum valor ímpar encontrado`
);
console.log(`\n`);

// 7
console.log(`7 ---`);
let min = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  min = numbers[i] < min ? numbers[i] : min;
}
console.log(`Menor número: ${min}`);
console.log(`\n`);

// 8
console.log(`8 ---`);
const novoArr = [];
for (let i = 0; i <= 24; i++) {
  novoArr[i] = i + 1;
}
console.log(novoArr);
console.log(`\n`);

// 9
console.log(`9 ---`);
const divPorDois = novoArr.map((a) => a / 2);
console.log(divPorDois);
console.log(`\n`);

// BONUS

console.log(`BONUS ---`);
console.log(`Crescente:`);
const numbersCres = numbers.sort((a, b) => a - b);
console.log(numbersCres);
console.log(`\n`);

console.log(`Decrescente:`);
const numbersDec = numbers.sort((a, b) => b - a);
console.log(numbersDec);
console.log(`\n`);

console.log(`Novo Array:`);
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
const bonusArr = [];
for (let i = 0; i < numbers.length; i++) {
  if (i !== numbers.length - 1) bonusArr.push(numbers[i] * numbers[i + 1]);
  else bonusArr.push(numbers[i] * 2);
}
console.log(bonusArr);
