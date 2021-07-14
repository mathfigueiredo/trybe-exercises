const myRemove = require('./myRemove');

test('Remove 3 de [1, 2, 3, 4]', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
});
