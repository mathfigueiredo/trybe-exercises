const myFizzBuzz = require('./myFizzbuzz');

test('Verifica se myFizzBuzz(15) retorna "fizzbuzz"', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
});
