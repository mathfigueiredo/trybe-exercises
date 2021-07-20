function encode(string) {
  // seu código aqui
  let encoded = string
    .replace(/a/g, '1')
    .replace(/e/g, '2')
    .replace(/i/g, '3')
    .replace(/o/g, '4')
    .replace(/u/g, '5');
  return encoded;
}

function decode(string) {
  // seu código aqui
  let decoded = string
    .replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');
  return decoded;
}

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

function hydrate(string) {
  // seu código aqui
  const newStr = string.replace(/\D/g, '');
  let count = 0;
  for (let i = 0; i < newStr.length; i += 1) {
    count += Number(newStr[i]);
  }
  return count === 1 ? `${count} copo de água` : `${count} copos de água`;
}

module.exports = { encode, decode, techList, hydrate };
