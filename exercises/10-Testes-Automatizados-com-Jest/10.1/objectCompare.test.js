const { obj1, obj2, obj3 } = require('./objectCompare');

test('Compara objetos iguais', () => {
  expect(obj1).toMatchObject(obj2);
});

test('Compara objetos iguais', () => {
  expect(obj1).not.toMatchObject(obj3);
});

test('Compara objetos iguais', () => {
  expect(obj2).not.toMatchObject(obj3);
});
