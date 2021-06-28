const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

function studentAverage() {
  const arr = [];
  const average = grades.map(
    (x) => x.reduce((acc, cur) => (acc += cur), 0) / x.length
  );

  for (let i = 0; i < students.length; i++) {
    let obj = {};
    obj.name = students[i];
    obj.average = average[i];
    arr.push(obj);
  }

  return arr;
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);
