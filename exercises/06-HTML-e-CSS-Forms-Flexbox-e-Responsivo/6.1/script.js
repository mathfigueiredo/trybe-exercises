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
const btnClean = document.getElementById('btn-clean');

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
  if (name.value.length > 0 && name.value.length <= 40) {
    const p = document.createElement('p');
    p.innerHTML = `<span class="green">&check;</span>&nbsp;<b>NOME:</b> ${name.value}`;
    const divResult = document.getElementById('div-result');
    divResult.appendChild(p);
    return true;
  } else {
    const p = document.createElement('p');
    p.innerHTML =
      '<span class ="red">&times;</span>&nbsp;O campo <b>NOME</b> é obrigatório e deve conter até 40 caracteres';
    const divResult = document.getElementById('div-result');
    divResult.appendChild(p);
    return false;
  }
}

function checkEmail() {
  if (email.value.length > 0 && email.value.length <= 50) {
    const p = document.createElement('p');
    p.innerHTML = `<span class ="green">&check;</span>&nbsp;<b>EMAIL:</b> ${email.value}`;
    const divResult = document.getElementById('div-result');
    divResult.appendChild(p);
    return true;
  } else {
    const p = document.createElement('p');
    p.innerHTML =
      '<span class ="red">&times;</span>&nbsp;O campo <b>EMAIL</b> é obrigatório e deve conter até 50 caracteres';
    const divResult = document.getElementById('div-result');
    divResult.appendChild(p);
    return false;
  }
}

function checkCity() {
  if (city.value.length > 0 && city.value.length <= 28) {
    const p = document.createElement('p');
    p.innerHTML = `<span class ="green">&check;</span>&nbsp;<b>CIDADE:</b> ${city.value}`;
    const divResult = document.getElementById('div-result');
    divResult.appendChild(p);
    return true;
  } else {
    const p = document.createElement('p');
    p.innerHTML =
      '<span class ="red">&times;</span>&nbsp;O campo <b>CIDADE</b> é obrigatório e deve conter até 28 caracteres';
    const divResult = document.getElementById('div-result');
    divResult.appendChild(p);
    return false;
  }
}

function checkRadio() {
  if (tipoCasa.checked || tipoApartamento.checked) {
    let tipoRadio;
    if (tipoCasa.checked) tipoRadio = 'Casa';
    else tipoRadio = 'Apartamento';
    const p = document.createElement('p');
    p.innerHTML = `<span class ="green">&check;</span>&nbsp;<b>TIPO:</b> ${tipoRadio}`;
    const divResult = document.getElementById('div-result');
    divResult.appendChild(p);
    return true;
  } else {
    const p = document.createElement('p');
    p.innerHTML =
      '<span class ="red">&times;</span>&nbsp;Você deve marcar o <b>TIPO</b> de sua residência (Casa ou Apartamento)';
    const divResult = document.getElementById('div-result');
    divResult.appendChild(p);
    return false;
  }
}

function checkResume() {
  if (resume.value.length > 0 && resume.value.length <= 1000) {
    const p = document.createElement('p');
    p.innerHTML = `<span class ="green">&check;</span>&nbsp;<b>RESUME:</b> ${resume.value}`;
    const divResult = document.getElementById('div-result');
    divResult.appendChild(p);
    return true;
  } else {
    const p = document.createElement('p');
    p.innerHTML =
      '<span class ="red">&times;</span>&nbsp;O campo <b>RESUME</b> é obrigatório e deve conter até 1000 caracteres';
    const divResult = document.getElementById('div-result');
    divResult.appendChild(p);
    return false;
  }
}

function checkJobPosition() {
  if (jobPosition.value.length > 0 && jobPosition.value.length <= 40) {
    const p = document.createElement('p');
    p.innerHTML = `<span class ="green">&check;</span>&nbsp;<b>CARGO:</b> ${jobPosition.value}`;
    const divResult = document.getElementById('div-result');
    divResult.appendChild(p);
    return true;
  } else {
    const p = document.createElement('p');
    p.innerHTML =
      '<span class ="red">&times;</span>&nbsp;O campo <b>CARGO</b> é obrigatório e deve conter até 40 caracteres';
    const divResult = document.getElementById('div-result');
    divResult.appendChild(p);
    return false;
  }
}

function checkJobDescription() {
  if (jobDescription.value.length > 0 && jobDescription.value.length <= 500) {
    const p = document.createElement('p');
    p.innerHTML = `<span class ="green">&check;</span>&nbsp;<b>DESCRIÇÃO DO CARGO:</b> ${jobDescription.value}`;
    const divResult = document.getElementById('div-result');
    divResult.appendChild(p);
    return true;
  } else {
    const p = document.createElement('p');
    p.innerHTML =
      '<span class ="red">&times;</span>&nbsp;O campo <b>DESCRIÇÃO DO CARGO</b> é obrigatório e deve conter até 500 caracteres';
    const divResult = document.getElementById('div-result');
    divResult.appendChild(p);
    return false;
  }
}

function checkSlash() {
  if (startDate.value[2] === '/' && startDate.value[5] === '/' && startDate.value.length === 10) {
    return true;
  } else {
    const p = document.createElement('p');
    p.innerHTML =
      '<span class ="red">&times;</span>&nbsp;O formato da <b>DATA DE INÍCIO</b> deve ser <b>dd/mm/aaaa</b>';
    const divResult = document.getElementById('div-result');
    divResult.appendChild(p);
    return false;
  }
}

function checkDateDay() {
  if (Number(startDate.value[0] + startDate.value[1]) > 0 && Number(startDate.value[0] + startDate.value[1]) <= 31) {
    return true;
  } else {
    const p = document.createElement('p');
    p.innerHTML = '<span class ="red">&times;</span>&nbsp;O <b>DIA</b> da DATA DE INÍCIO deve ser <b>entre 1 e 31</b>';
    const divResult = document.getElementById('div-result');
    divResult.appendChild(p);
  }
}

function checkDateMonth() {
  if (Number(startDate.value[3] + startDate.value[4]) > 0 && Number(startDate.value[3] + startDate.value[4]) <= 12) {
    return true;
  } else {
    const p = document.createElement('p');
    p.innerHTML = '<span class ="red">&times;</span>&nbsp;O <b>MÊS</b> da DATA DE INÍCIO deve ser <b>entre 1 e 12</b>';
    const divResult = document.getElementById('div-result');
    divResult.appendChild(p);
  }
}

function checkDateYear() {
  if (Number(startDate.value[6] + startDate.value[7] + startDate.value[8] + startDate.value[9]) >= 0) {
    return true;
  } else {
    const p = document.createElement('p');
    p.innerHTML = '<span class ="red">&times;</span>&nbsp;O <b>ANO</b> da DATA DE INÍCIO não pode ser negativo';
    const divResult = document.getElementById('div-result');
    divResult.appendChild(p);
  }
}

function checkStartDate() {
  if (checkSlash() === true) {
    if (checkDateDay() && checkDateMonth() && checkDateYear()) {
      const p = document.createElement('p');
      p.innerHTML = `<span class ="green">&check;</span>&nbsp;<b>DATA DE INÍCIO:</b> ${startDate.value}`;
      const divResult = document.getElementById('div-result');
      divResult.appendChild(p);
    }
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
  checkJobPosition();
  checkJobDescription();
  checkStartDate();
});

btnClean.addEventListener('click', function (e) {
  e.preventDefault();

  name.value = '';
  email.value = '';
  cpf.value = '';
  adress.value = '';
  city.value = '';
  tipoCasa.checked = false;
  tipoApartamento.checked = false;
  resume.value = '';
  jobPosition.value = '';
  jobDescription.value = '';
  startDate.value = '';

  div.remove();
});
