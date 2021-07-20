'use strict';

const paiDoElemento = document.querySelector(
  '#elementoOndeVoceEsta'
).parentNode;
const primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');

paiDoElemento.style.color = 'red';
primeiroFilhoDoFilho.innerText = 'primeiroFilhoDoFilho Texto Adicionado';
document.querySelector('#pai').firstElementChild;
document.querySelector('#elementoOndeVoceEsta').previousElementSibling;
document.querySelector('#elementoOndeVoceEsta').nextSibling;
document.querySelector('#elementoOndeVoceEsta').nextElementSibling;
document.querySelector('#pai').lastElementChild.previousElementSibling;

// PARTE 2
const criaIrmaodoElement = document.createElement('div');
criaIrmaodoElement.innerText = 'irmaoDoElement';
criaIrmaodoElement.id = 'irmaoDoElement';
document.querySelector('#pai').appendChild(criaIrmaodoElement);

const criaNovoFilhoDoElement = document.createElement('div');
criaNovoFilhoDoElement.innerText = 'novoFilhoDoElement';
criaNovoFilhoDoElement.id = 'novoFilhoDoElement';
document
  .querySelector('#elementoOndeVoceEsta')
  .appendChild(criaNovoFilhoDoElement);

const criaNetoDoElement = document.createElement('div');
criaNetoDoElement.innerText = 'netoDoElement';
criaNetoDoElement.id = 'netoDoElement';
document.querySelector('#primeiroFilhoDoFilho').appendChild(criaNetoDoElement);

document.querySelector('#primeiroFilhoDoFilho').innerHTML =
  'primeiroFilhoDoFilho Texto Adicionado<div id="netoDoElement">netoDoElement</div>';

document.querySelector('#netoDoElement').parentElement.parentElement
  .nextElementSibling;

// PARTE 3
const elementsList = document.querySelectorAll('#paiDoPai *');

for (let i = 0; i < elementsList.length; i++) {
  if (
    elementsList[i].id.includes('pai') ||
    elementsList[i].id.includes('elementoOndeVoceEsta') ||
    elementsList[i].id.includes('primeiroFilhoDoFilho')
  )
    continue;
  else {
    document.querySelector(`#${elementsList[i].id}`).remove();
  }
}
