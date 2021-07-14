const myRemove = require('./myRemove');

test('Remove 3 de [1, 2, 3, 4]', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
});

test('Remove 3 de [1, 2, 3, 4]', () => {
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
});

test('Array passado como parâmetro não sofreu alterações', () => {
  const arr = [1, 2, 3, 4];
  myRemove(arr, 3);
  expect(arr).toEqual([1, 2, 3, 4]);
});
