// MATHEUS SOARES DE FIGUEIREDO
// Helper functions
function phoneConcat(arr) {
  let part1 = `(${arr[0]}${arr[1]}) ${arr[2]}${arr[3]}${arr[4]}${arr[5]}${arr[6]}-`;
  let part2 = `${arr[7]}${arr[8]}${arr[9]}${arr[10]}`;
  const phone = part1 + part2;
  return phone;
}

function checkZeroOrNine(arr) {
  let checkZN = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < 0 || arr[i] > 9) {
      checkZN = 1;
      break;
    }
  }
  return checkZN === 1;
}

function checkNumberTimes(arr) {
  let checkTimes = 0;
  const sorted = [...arr].sort((a, b) => a - b);
  for (let i = 1; i < sorted.length - 1; i += 1) {
    if (sorted[i] === sorted[i - 1] && sorted[i] === sorted[i + 1]) {
      checkTimes = 1;
      break;
    }
  }
  return checkTimes === 1;
}

function triCheckSidesLowerThan(a, b, c) {
  let checkSidesLower = 0;
  if (a < b + c && b < a + c && c < a + b) {
    checkSidesLower = 1;
  }
  return checkSidesLower === 1;
}
function triCheckSidesGreaterThan(a, b, c) {
  let checkSidesGreater = 0;
  if (a > Math.abs(c - b) && b > Math.abs(c - a) && c > Math.abs(a - b)) {
    checkSidesGreater = 1;
  }
  return checkSidesGreater === 1;
}

// Desafio 10
function techList(arr, namePessoa) {
  // seu código aqui
  const ans = [];
  if (arr.length > 0) {
    arr.sort();
    for (let i = 0; i < arr.length; i += 1) {
      ans.push({ tech: arr[i], name: namePessoa });
    }
    return ans;
  }
  if (arr.length === 0) {
    return 'Vazio!';
  }
}

// Desafio 11
function generatePhoneNumber(arr) {
  // seu código aqui
  if (arr.length !== 11) return 'Array com tamanho incorreto.';
  if (checkNumberTimes(arr) || checkZeroOrNine(arr)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return phoneConcat(arr);
}

// Desafio 12
function triangleCheck(a, b, c) {
  // seu código aqui
  return triCheckSidesGreaterThan(a, b, c) && triCheckSidesLowerThan(a, b, c);
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  const newStr = string.replace(/\D/g, '');
  let count = 0;
  for (let i = 0; i < newStr.length; i += 1) {
    count += Number(newStr[i]);
  }
  return count === 1 ? `${count} copo de água` : `${count} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
