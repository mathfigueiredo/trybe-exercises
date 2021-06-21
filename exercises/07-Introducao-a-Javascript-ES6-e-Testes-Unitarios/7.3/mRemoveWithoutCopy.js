const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

const str = (x) => JSON.stringify(x);

// implemente seus testes aqui

// 1
// assert.strictEqual(str(myRemoveWithoutCopy([1, 2, 3, 4], 3)), str([1, 2, 4])); // true

//2
// assert.notStrictEqual(
//   str(myRemoveWithoutCopy([1, 2, 3, 4], 3)),
//   str([1, 2, 3, 4])
// ); // true

// 3
// const array = [1, 2, 3, 4];
// const newArray = [...array];
// myRemoveWithoutCopy(array, 3);
// console.log(array); // [1,2,4] --- o slice faz isso no array original
// console.log(newArray); // teria que fazer isso para copiar

// 4
// assert.strictEqual(
//   str(myRemoveWithoutCopy([1, 2, 3, 4], 5)),
//   str([1, 2, 3, 4])
// ); // true
