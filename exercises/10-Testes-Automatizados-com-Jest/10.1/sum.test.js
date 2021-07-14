const sum = require('./sum');

test('sums 4 and 5', () => {
  expect(sum(4, 5)).toBe(9);
});

test('sums 0 and 0', () => {
  expect(sum(0, 0)).toBe(0);
});

test('sums 4 and "5"', () => {
  expect(() => {
    sum(4, '5');
  }).toThrow('parameters must be numbers');
});
