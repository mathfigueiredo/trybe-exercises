const assert = require('assert');

const greetPeople = (people) => {
  let greeting = [];
  const hello = 'Hello ';

  for (const person in people) {
    greeting[person] = hello + people[person];
  }
  return greeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);
