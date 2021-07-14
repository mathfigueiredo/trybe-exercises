const myFizzBuzz = require('./myFizzbuzz');

test('Verifica se myFizzBuzz(15) retorna "fizzbuzz"', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
});

test('Verifica se myFizzBuzz(9) retorna "fizz"', () => {
  expect(myFizzBuzz(9)).toBe('fizz');
});

test('Verifica se myFizzBuzz(25) retorna "buzz"', () => {
  expect(myFizzBuzz(25)).toBe('buzz');
});
