'use strict';

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
