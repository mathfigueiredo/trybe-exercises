const { encode, decode, techList, hydrate } = require('./playgroundFunctions');

// ENCODE / DECODE
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

test('Verifica se, na função ENCODE, o tamanho da string de return tem o mesmo tamanho da entrada', () => {
  const str = 'Matheus';
  const len = str.length;
  expect(encode(str).length).toBe(len);
});

test('Verifica se, na função DECODE, o tamanho da string de return tem o mesmo tamanho da entrada', () => {
  const str = 'M1th25s';
  const len = str.length;
  expect(decode(str).length).toBe(len);
});

// TECHLIST
describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(
      techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')
    ).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas',
      },
      {
        tech: 'HTML',
        name: 'Lucas',
      },
      {
        tech: 'JavaScript',
        name: 'Lucas',
      },
      {
        tech: 'Jest',
        name: 'Lucas',
      },
      {
        tech: 'React',
        name: 'Lucas',
      },
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe(
      '7 copos de água'
    );
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe(
      '5 copos de água'
    );
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe(
      '3 copos de água'
    );
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
