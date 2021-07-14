const { encode, decode, techList, hydrate } = require('./playgroundFunctions');

test('Verifica se encode é uma função', () => {
  expect(typeof encode).toBe('function');
});

test('Verifica se decode é uma função', () => {
  expect(typeof decode).toBe('function');
});

test('Verifica se, na função ENCODE, as vogais a,e,i,o,u são substituídas por 1,2,3,4,5', () => {
  expect(encode('aeiou')).toBe('12345');
});

test('Verifica se, na função DECODE, os numerais 1,2,3,4,5 são substituídas por a,e,i,o,u', () => {
  expect(decode('12345')).toBe('aeiou');
});

test('Verifica se, na função ENCODE, Matheus é convertido para M1th25s', () => {
  expect(encode('Matheus')).toBe('M1th25s');
});

test('Verifica se, na função DECODE, M1th25s é convertido para Matheus', () => {
  expect(decode('M1th25s')).toBe('Matheus');
});
