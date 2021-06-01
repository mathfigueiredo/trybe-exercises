'use strict';

// 1
let h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - Javascript DOM';
document.body.appendChild(h1);

// 2
let divMainContent = document.createElement('div');
divMainContent.className = 'main-content';
document.body.appendChild(divMainContent);

// 3
let divCenterContent = document.createElement('div');
divCenterContent.className = 'center-content';
document
  .getElementsByClassName('main-content')[0]
  .appendChild(divCenterContent);
// 4

// 5

// 6

// 7

// 8

// 9
