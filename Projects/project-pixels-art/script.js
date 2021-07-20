// // Componentes
const pixelBoardDivId = 'pixel-board';
let createLine;
let createPixel;

function clearHTML() {
  document.getElementById(pixelBoardDivId).innerHTML = '';
}

function makeLine(number) {
  for (let i = 0; i < number; i += 1) {
    createLine = document.createElement('div');
    createLine.classList.add('line');
    document.getElementById(pixelBoardDivId).appendChild(createLine);
  }
}

function makePixel(number) {
  for (let i = 0; i < number; i += 1) {
    for (let j = 0; j < number; j += 1) {
      createPixel = document.createElement('div');
      createPixel.classList.add('pixel');
      document.getElementsByClassName('line')[i].appendChild(createPixel);
    }
  }
}

makeLine(5);
makePixel(5);

function randomColor() {
  const hex = '0123456789ABCDEF';
  let generated = '';
  for (let i = 1; i <= 6; i += 1) {
    generated += hex[Math.trunc(Math.random() * 16)];
  }
  return generated;
}

// Code
document.querySelectorAll('.color')[0].style.backgroundColor = 'black';
document.querySelectorAll('.color')[1].style.backgroundColor = `#${randomColor()}`;
document.querySelectorAll('.color')[2].style.backgroundColor = `#${randomColor()}`;
document.querySelectorAll('.color')[3].style.backgroundColor = `#${randomColor()}`;

document.querySelectorAll('.color')[0].classList.add('selected');

function select(event) {
  for (let i = 0; i < document.querySelectorAll('.color').length; i += 1) {
    if (document.querySelectorAll('.color')[i] === event.target) {
      document.querySelectorAll('.color')[i].classList.add('selected');
    } else {
      document.querySelectorAll('.color')[i].classList.remove('selected');
    }
  }
}

document.getElementById('color-palette').addEventListener('click', (event) => {
  if (event.target.classList.contains('color')) {
    select(event);
  }
});

document.getElementById(pixelBoardDivId).addEventListener('click', (event) => {
  const evento = event;
  if (evento.target.classList.contains('pixel')) {
    evento.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
  }
});

const labelInputBoardSize = document.createElement('label');
const inputBoardSize = document.createElement('input');
const boardSizeButton = document.createElement('button');

labelInputBoardSize.for = 'board-size';
labelInputBoardSize.innerText = 'Board size';
labelInputBoardSize.style.marginRight = '5px';
inputBoardSize.type = 'number';
inputBoardSize.id = 'board-size';
inputBoardSize.max = 50;
inputBoardSize.min = 1;
inputBoardSize.style.marginRight = '5px';
boardSizeButton.id = 'generate-board';
boardSizeButton.innerText = 'VQV';

if (localStorage['board-sz'] === undefined) {
  inputBoardSize.value = '';
} else {
  inputBoardSize.value = localStorage.getItem('board-sz');
}

const addInput = document.querySelector('.button-div');
addInput.appendChild(labelInputBoardSize);
addInput.appendChild(inputBoardSize);
addInput.appendChild(boardSizeButton);

function changeBoardSize(number) {
  clearHTML();
  makeLine(number);
  makePixel(number);
}

boardSizeButton.addEventListener('click', () => {
  if (inputBoardSize.value === '') {
    alert('Board inválido!');
  } else if (inputBoardSize.value < 5) {
    changeBoardSize(5);
  } else if (inputBoardSize.value > 50) {
    changeBoardSize(50);
  } else {
    changeBoardSize(inputBoardSize.value);
  }
});

// BOTÃO LIMPAR
const button = document.createElement('button');
button.id = 'clear-board';
button.innerText = 'Limpar';
button.style.marginBottom = '5px';
button.style.display = 'block';
button.style.margin = '8px auto';
document.getElementsByClassName('button-div')[0].appendChild(button);

document.getElementById('clear-board').addEventListener('click', () => {
  for (let i = 0; i < document.querySelectorAll('.pixel').length; i += 1) {
    document.querySelectorAll('.pixel')[i].style.backgroundColor = 'white';
  }
});
