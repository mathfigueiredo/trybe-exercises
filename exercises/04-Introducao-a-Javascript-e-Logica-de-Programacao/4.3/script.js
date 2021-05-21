'use strict';

const n = 9;

// 1
console.log(`1 =====`);
for (let i = 1; i <= n; i++) {
  let str = '';
  for (let j = 1; j <= n; j++) {
    str += '*';
  }
  console.log(str);
}

// 2
console.log(`2 =====`);
for (let i = 1; i <= n; i++) {
  let str = '';
  for (let j = 1; j <= i; j++) {
    str += '*';
  }
  console.log(str);
}

// 3
console.log(`3 =====`);
for (let i = 1; i <= n; i++) {
  let str = '';
  for (let j = 1; j <= n; j++) {
    if (j < n - i + 1) str += ' ';
    else str += '*';
  }
  console.log(str);
}

// 4
console.log(`4 =====`);
if (n % 2 !== 0) {
  for (let i = 1; i <= (n + 1) / 2; i++) {
    let str = '';
    const askNum = i * 2 - 1;
    const spaceNumEach = (n - askNum) / 2;
    for (let j = 1; j <= n; j++) {
      if (j <= spaceNumEach || j > spaceNumEach + askNum) str += ' ';
      else str += '*';
    }
    console.log(str);
  }
} else console.log(`Insira um número Ímpar`);
