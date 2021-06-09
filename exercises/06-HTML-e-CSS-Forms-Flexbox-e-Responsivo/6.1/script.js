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

// EventListeners
btnSubmit.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(name.value);
});
