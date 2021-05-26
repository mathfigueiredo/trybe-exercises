'use strict';

const h1 = document.getElementById('header-container');
const emergencyTasks = document.getElementsByClassName('emergency-tasks');
const noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks');
const h3Emergency = document.querySelectorAll('.emergency-tasks div h3');
const h3NoEmergency = document.querySelectorAll('.no-emergency-tasks div h3');
const footer = document.querySelector('footer');
const bg = document.getElementById('container');

bg.style.background = '#sss';
h1.style.backgroundColor = 'lightgreen';
emergencyTasks[0].style.backgroundColor = 'orange';
noEmergencyTasks[0].style.backgroundColor = 'yellow';
h3Emergency[0].style.backgroundColor = 'purple';
h3Emergency[1].style.backgroundColor = 'purple';
h3NoEmergency[0].style.backgroundColor = 'black';
h3NoEmergency[1].style.backgroundColor = 'black';
footer.style.backgroundColor = 'green';
