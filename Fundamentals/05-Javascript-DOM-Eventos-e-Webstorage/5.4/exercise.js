'use strict';

// margin-left: 2rem
for (let i = 0; i < document.querySelectorAll('label').length; i++) {
  document.querySelectorAll('label')[i].style.marginRight = '2rem';
}

// width: 40px
for (let i = 0; i < document.querySelectorAll('.small').length; i++) {
  document.querySelectorAll('.small')[i].style.width = '40px';
}

// =========================
// ======= LOCAL STORAGE
// =========================

if (localStorage['font-selector'] !== undefined) {
  document.body.style.fontFamily = localStorage.getItem('font-selector');
  document.getElementById('font-selector').value = localStorage.getItem('font-selector');
}

if (localStorage['font-size'] !== undefined) {
  for (let i = 0; i < document.querySelectorAll('p').length; i++) {
    document.querySelectorAll('p')[i].style.fontSize = localStorage.getItem('font-size');
    document.getElementById('font-size').value = parseInt(localStorage.getItem('font-size'));
  }
}

if (localStorage['font-color'] !== undefined) {
  document.body.style.color = localStorage.getItem('font-color');
  document.getElementById('font-color').value = localStorage.getItem('font-color');
}

if (localStorage['bg-color'] !== undefined) {
  document.body.style.backgroundColor = localStorage.getItem('bg-color');
  document.getElementById('bg-color').value = localStorage.getItem('bg-color');
}

if (localStorage['line-spacing'] !== undefined) {
  document.body.style.lineHeight = localStorage.getItem('line-spacing');
  document.getElementById('line-spacing').value = localStorage.getItem('line-spacing');
}

// ================
// ===== REGRAS
// ================

// font-family
document.getElementById('font-selector').addEventListener('change', function () {
  document.body.style.fontFamily = document.getElementById('font-selector').value;

  localStorage.setItem('font-selector', document.getElementById('font-selector').value);
});

// font-size
document.getElementById('font-size').addEventListener('keyup', function () {
  for (let i = 0; i < document.querySelectorAll('p').length; i++) {
    document.querySelectorAll('p')[i].style.fontSize =
      parseInt(document.getElementById('font-size').value) + 'px';
  }

  localStorage.setItem('font-size', parseInt(document.getElementById('font-size').value) + 'px');
});

// font-color
document.getElementById('font-color').addEventListener('keyup', function () {
  document.body.style.color = document.getElementById('font-color').value;

  localStorage.setItem('font-color', document.getElementById('font-color').value);
});

// bg-color
document.getElementById('bg-color').addEventListener('keyup', function () {
  document.body.style.backgroundColor = document.getElementById('bg-color').value;

  localStorage.setItem('bg-color', document.getElementById('bg-color').value);
});

// line-spacing
document.getElementById('line-spacing').addEventListener('keyup', function () {
  document.body.style.lineHeight = document.getElementById('line-spacing').value;

  localStorage.setItem('line-spacing', document.getElementById('line-spacing').value);
});
