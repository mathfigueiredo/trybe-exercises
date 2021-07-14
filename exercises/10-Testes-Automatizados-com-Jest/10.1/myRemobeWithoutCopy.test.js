const myRemoveWithoutCopy = require('./myRemobeWithoutCopy');

test('Remove 3 de [1, 2, 3, 4]', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
});

test('Verifica se retirar 3 de [1, 2, 3, 4] NÃO gera [1, 2, 3, 4]', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
});

test('Verifica se o array passado por parâmetro sofreu alterações', () => {
  const arr = [1, 2, 3, 4];
  myRemoveWithoutCopy(arr, 3);
  expect(arr).not.toEqual([1, 2, 3, 4]);
});
