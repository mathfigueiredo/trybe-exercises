const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addShift(object, key, value) {
  object[key] = value;
}

function listKeys(object) {
  console.log(Object.keys(object));
}

function showObjectLength(object) {
  console.log(Object.entries(object).length);
}

function listValues(object) {
  console.log(Object.values(object));
}

function sumStudents(object) {
  let sum = 0;
  for (let i = 0; i < Object.entries(object).length; i++) {
    const key = Object.keys(object)[i];
    sum += allLessons[key].numeroEstudantes;
  }
  console.log(sum);
}

function getValueByNumber(object, number) {
  const key = Object.keys(object)[number];
  console.log(object[key]);
}

function verifyPair(object, key, value) {
  console.log(object[key] === value);
}

addShift(lesson2, 'turno', 'manhã');
listKeys(lesson3);
showObjectLength(lesson3);
listValues(lesson3);

const allLessons = {};
const joinLessons = { lesson1, lesson2, lesson3 };

Object.assign(allLessons, joinLessons);
console.log(allLessons);

sumStudents(allLessons);
getValueByNumber(lesson1, 0);
verifyPair(lesson3, 'turno', 'noite');
verifyPair(lesson3, 'materia', 'Maria Clara');
