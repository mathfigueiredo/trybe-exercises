'use strict';
// === LECTURES =========

// ID
const paragraph = document.getElementById('paragraph');
const pageTitle = document.getElementById('page-title');
const subTitle = document.getElementById('subtitle');
const secondParagraph = document.getElementById('second-paragraph');

// CLASS
const par = document.getElementsByClassName('par');

// TAGNAME
const h4 = document.getElementsByTagName('h4');

// ---
paragraph.style.color = 'red';
pageTitle.innerText = 'O auto da compadecida';
subTitle.innerText = 'Subtítulo alterado';
secondParagraph.innerText = 'Segundo parágrafo alterado com muita criatividade';

par[0].style.fontSize = '2rem';

h4[0].style.fontStyle = 'italic';
