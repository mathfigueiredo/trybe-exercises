const login = document.getElementById('input-login');
const password = document.getElementById('input-password');
const btnLogin = document.getElementById('btn-login');
const divNameLastName = document.querySelector('.container-name-lastname');
const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const divEmail = document.querySelector('.container-email-house');
const inputEmail = document.getElementById('input-email');
const house = document.getElementById('house');
const divRadio = document.querySelector('.container-radios');
const families = document.getElementsByName('family');
const divClass = document.querySelector('.container-checks');
const checkboxes = document.querySelectorAll('.subject');
const divRate = document.querySelector('.container-rate');
const rates = document.getElementsByName('rate');
const divText = document.querySelector('.container-textarea');
const text = document.getElementById('textarea');
const counter = document.getElementById('counter');
const checkForm = document.getElementById('agreement');
const btnForm = document.getElementById('submit-btn');

function checkCredentials() {
  // prettier-ignore
  if (login.value === 'tryber@teste.com' && password.value === '123456')alert('Olá, Tryber!');
  else alert('Login ou senha inválidos.');
}

function showBtn() {
  btnForm.disabled = checkForm.checked !== true;
}

function textCount() {
  const count = 500 - text.value.length;
  counter.textContent = count;
}

function fillName() {
  const name = inputName.value;
  const lastname = inputLastName.value;
  inputName.remove();
  inputLastName.remove();
  divNameLastName.textContent = `Nome: ${name} ${lastname}`;
}

function fillEmail() {
  const email = inputEmail.value;
  inputEmail.remove();
  divEmail.insertAdjacentText('afterbegin', `Email: ${email}`);
}

function fillHouse() {
  const h = house.value;
  house.remove();
  divEmail.insertAdjacentHTML('beforeend', `<p>Casa: ${h}</p>`);
}

function fillFamily() {
  let checked;
  for (let i = 0; i < families.length; i += 1) {
    if (families[i].checked) {
      checked = families[i].value;
      break;
    }
  }
  divRadio.innerHTML = `<p>Família: ${checked}</p>`;
}

function fillClass() {
  const classes = [];
  for (let i = 0; i < checkboxes.length; i += 1) {
    if (checkboxes[i].checked) classes.push(checkboxes[i].value);
  }
  divClass.innerHTML = `<p>Matérias: ${classes.join(', ')}.`;
}

function fillRate() {
  let rate;
  for (let i = 0; i < rates.length; i += 1) {
    if (rates[i].checked) {
      rate = rates[i].value;
      break;
    }
  }
  divRate.innerHTML = `Avaliação: ${rate}`;
}

function fillObs() {
  const obs = text.value;
  divText.innerHTML = `<p>Observações: ${obs}`;
}

function submitForm(e) {
  e.preventDefault();
  fillName();
  fillEmail();
  fillHouse();
  fillFamily();
  fillClass();
  fillRate();
  fillObs();
}

btnLogin.addEventListener('click', checkCredentials);

checkForm.addEventListener('change', showBtn);

text.addEventListener('keyup', textCount);

btnForm.addEventListener('click', submitForm);
