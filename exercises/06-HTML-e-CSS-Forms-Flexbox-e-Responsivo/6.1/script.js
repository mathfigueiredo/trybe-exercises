'use strict';

// Selectors
const name = document.getElementById('input-name');
const email = document.getElementById('input-email');
const cpf = document.getElementById('input-cpf');
const adress = document.getElementById('input-adress');
const city = document.getElementById('input-city');
const state = document.getElementById('input-state');
const tipoCasa = document.getElementById('input-tipo-casa');
const tipoApartamento = document.getElementById('input-tipo-apartamento');
const resume = document.getElementById('input-resume');
const jobPosition = document.getElementById('input-job-position');
const jobDescription = document.getElementById('input-job-description');
const startDate = document.getElementById('input-start-date');
const btnSubmit = document.getElementById('btn-submit');

const div = document.createElement('div');
div.id = 'div-result';

// States input
const selectState = document.getElementById('input-state');
const states = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
];

for (let i = 0; i < states.length; i++) {
  const opt = document.createElement('option');
  opt.value = states[i].toLowerCase();
  opt.innerText = states[i];
  selectState.appendChild(opt);
}

// Functions
function checkName() {
  if (name.value.length > 0 && name.value.length <= 40) return true;
  else {
    const p = document.createElement('p');
    p.innerHTML = 'O campo <b>NOME</b> é obrigatório e deve conter até 40 caracteres';
    const divResult = document.getElementById('div-result');
    divResult.appendChild(p);
    return false;
  }
}

function checkEmail() {
  if (email.value.length > 0 && email.value.length <= 50) return true;
  else {
    const p = document.createElement('p');
    p.innerHTML = 'O campo <b>EMAIL</b> é obrigatório e deve conter até 50 caracteres';
    const divResult = document.getElementById('div-result');
    divResult.appendChild(p);
    return false;
  }
}

function checkCity() {
  if (city.value.length > 0 && city.value.length <= 28) return true;
  else {
    const p = document.createElement('p');
    p.innerHTML = 'O campo <b>CIDADE</b> é obrigatório e deve conter até 28 caracteres';
    const divResult = document.getElementById('div-result');
    divResult.appendChild(p);
    return false;
  }
}

function checkRadio() {
  if (tipoCasa.checked || tipoApartamento.checked) return true;
  else {
    const p = document.createElement('p');
    p.innerHTML = 'Você deve marcar o <b>TIPO</b> de sua residência (Casa ou Apartamento)';
    const divResult = document.getElementById('div-result');
    divResult.appendChild(p);
    return false;
  }
}

function checkResume() {
  if (resume.value.length > 0 && resume.value.length <= 1000) return true;
  else {
    const p = document.createElement('p');
    p.innerHTML = 'O campo <b>RESUME</b> é obrigatório e deve conter até 1000 caracteres';
    const divResult = document.getElementById('div-result');
    divResult.appendChild(p);
    return false;
  }
}

function checkJobPosition() {
  if (jobPosition.value.length > 0 && jobPosition.value.length <= 40) return true;
  else {
    const p = document.createElement('p');
    p.innerHTML = 'O campo <b>CARGO</b> é obrigatório e deve conter até 40 caracteres';
    const divResult = document.getElementById('div-result');
    divResult.appendChild(p);
    return false;
  }
}

function checkJobPosition() {
  if (jobDescription.value.length > 0 && jobDescription.value.length <= 500) return true;
  else {
    const p = document.createElement('p');
    p.innerHTML = 'O campo <b>DESCRIÇÃO DO CARGO</b> é obrigatório e deve conter até 500 caracteres';
    const divResult = document.getElementById('div-result');
    divResult.appendChild(p);
    return false;
  }
}

// EventListeners
btnSubmit.addEventListener('click', function (e) {
  e.preventDefault();

  document.body.appendChild(div);
  div.innerHTML = '';

  checkName();
  checkEmail();
  checkCity();
  checkRadio();
  checkResume();
});
