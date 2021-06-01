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
let paragraph = document.createElement('p');
paragraph.innerText = 'This is a Paragraph';
document.getElementsByClassName('center-content')[0].appendChild(paragraph);

// 5
let divLeftContent = document.createElement('div');
divLeftContent.classList.add('left-content');
document.getElementsByClassName('main-content')[0].appendChild(divLeftContent);

// 6

// 7

// 8

// 9
