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
let divRightContent = document.createElement('div');
divRightContent.classList.add('right-content');
document.getElementsByClassName('main-content')[0].appendChild(divRightContent);

// 7
let imgem = document.createElement('img');
imgem.src = 'https://picsum.photos/200';
imgem.classList.add('small-image');
document.getElementsByClassName('left-content')[0].appendChild(imgem);

// 8
let ul = document.createElement('ul');
ul.classList.add('ul-main');
document.getElementsByClassName('right-content')[0].appendChild(ul);

let li1 = document.createElement('li');
li1.innerText = 'um';
let li2 = document.createElement('li');
li2.innerText = 'dois';
let li3 = document.createElement('li');
li3.innerText = 'três';
let li4 = document.createElement('li');
li4.innerText = 'quatro';
let li5 = document.createElement('li');
li5.innerText = 'cinco';
let li6 = document.createElement('li');
li6.innerText = 'seis';
let li7 = document.createElement('li');
li7.innerText = 'sete';
let li8 = document.createElement('li');
li8.innerText = 'oito';
let li9 = document.createElement('li');
li9.innerText = 'nove';
let li10 = document.createElement('li');
li10.innerText = 'dez';

document.getElementsByClassName('ul-main')[0].appendChild(li1);
document.getElementsByClassName('ul-main')[0].appendChild(li2);
document.getElementsByClassName('ul-main')[0].appendChild(li3);
document.getElementsByClassName('ul-main')[0].appendChild(li4);
document.getElementsByClassName('ul-main')[0].appendChild(li5);
document.getElementsByClassName('ul-main')[0].appendChild(li6);
document.getElementsByClassName('ul-main')[0].appendChild(li7);
document.getElementsByClassName('ul-main')[0].appendChild(li8);
document.getElementsByClassName('ul-main')[0].appendChild(li9);
document.getElementsByClassName('ul-main')[0].appendChild(li10);

// 9
let h31 = document.createElement('h3');
let h32 = document.createElement('h3');
let h33 = document.createElement('h3');

document.getElementsByClassName('main-content')[0].appendChild(h31);
document.getElementsByClassName('main-content')[0].appendChild(h32);
document.getElementsByClassName('main-content')[0].appendChild(h33);

// BONUS 1
h1.classList.add('title');

// BONUS 2
h31.classList.add('description');
h32.classList.add('description');
h33.classList.add('description');

// BONUS 3
document.getElementsByClassName('main-content')[0].removeChild(divLeftContent);

// BONUS 4
divRightContent.style.margin = '0 auto';

// BONUS 5

// BONUS 6
