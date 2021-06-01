function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
  26, 27, 28, 29, 30, 31,
];

let dia = document.createElement('li');

function fillDays() {
  for (let i = 0; i < dezDaysList.length; i++) {
    dia = document.createElement('li');
    dia.classList.add('day');
    dia.innerText = dezDaysList[i];
    document.getElementById('days').appendChild(dia);
  }
}

fillDays();

for (let i = 0; i < document.querySelectorAll('.day').length; i++) {
  if (
    document.querySelectorAll('.day')[i].innerText === '24' ||
    document.querySelectorAll('.day')[i].innerText === '25' ||
    document.querySelectorAll('.day')[i].innerText === '31'
  ) {
    document.querySelectorAll('.day')[i].classList.add('holiday');
  }
}

for (let i = 0; i < document.querySelectorAll('.day').length; i++) {
  if (
    document.querySelectorAll('.day')[i].innerText === '4' ||
    document.querySelectorAll('.day')[i].innerText === '11' ||
    document.querySelectorAll('.day')[i].innerText === '18' ||
    document.querySelectorAll('.day')[i].innerText === '25'
  ) {
    document.querySelectorAll('.day')[i].classList.add('friday');
  }
}

let btnHoliday = document.createElement('button');
btnHoliday.id = 'btn-holiday';
btnHoliday.innerText = 'Feriados';
document.getElementsByClassName('buttons-container')[0].appendChild(btnHoliday);

let interruptHoliday = 0;

btnHoliday.addEventListener('click', function () {
  if (interruptHoliday === 0) {
    for (let i = 0; i < document.querySelectorAll('.holiday').length; i++) {
      document.querySelectorAll('.holiday')[i].style.backgroundColor = 'yellow';
    }
    interruptHoliday = 1;
  } else {
    for (let i = 0; i < document.querySelectorAll('.holiday').length; i++) {
      document.querySelectorAll('.holiday')[i].style.backgroundColor = '#eee';
    }
    interruptHoliday = 0;
  }
});

let btnFriday = document.createElement('button');
btnFriday.id = 'btn-friday';
btnFriday.innerText = 'Friday';
document.getElementsByClassName('buttons-container')[0].appendChild(btnFriday);

let fridayArr = [4, 11, 18, 25];
let interruptFriday;

btnFriday.addEventListener('click', function () {
  if (interruptFriday === 0) {
    for (let i = 0; i < document.querySelectorAll('.friday').length; i++) {
      document.querySelectorAll('.friday')[i].innerText = 'TGIF!!!';
    }
    interruptFriday = 1;
  } else {
    for (let i = 0; i < document.querySelectorAll('.friday').length; i++) {
      document.querySelectorAll('.friday')[i].innerText = fridayArr[i];
    }
    interruptFriday = 0;
  }
});

document.querySelector('#days').addEventListener('mouseover', function () {
  event.target.style.transition = 'all .2s';
  event.target.style.fontSize = '30px';
});

document.querySelector('#days').addEventListener('mouseout', function () {
  event.target.style.transition = 'all .2s';
  event.target.style.fontSize = '20px';
});

function addtask(string) {
  let task = document.createElement('span');
  task.innerText = string;
  document.getElementsByClassName('my-tasks')[0].appendChild(task);
}

addtask('cozinhar');

function addLeg(cor) {
  let div = document.createElement('div');
  div.className = 'task';
  div.style.backgroundColor = cor;
  document.getElementsByClassName('my-tasks')[0].appendChild(div);
}

addLeg('green');

document.querySelectorAll('.task')[0].addEventListener('click', function () {
  if (event.target.className === 'task') {
    event.target.className = 'task selected';
  } else {
    event.target.className = 'task';
  }
});
