// 1
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;

// 2
function showBigger2() {
  const a = 10;
  const b = 20;
  return a >= b ? a : b;
}

// 3
function showBigger3() {
  const a = 10;
  const b = 20;
  const c = 30;
  if (a >= b && a >= c) return a;
  else if (b >= a && b >= c) return b;
  else if (c >= a && c >= b) return c;
}

// 4
function isPositive() {
  const a = 10;
  if (a > 0) return `positive`;
  else if (a < 0) return `negative`;
  else return `zero`;
}

// 5
function isTriangle() {
  const a = 60;
  const b = 50;
  const c = 70;

  if (a + b + c == 180) {
    if (a >= 1 && a <= 180 && b >= 1 && b <= 180 && c >= 1 && c <= 180)
      return true;
    else
      return `ERRO: Um ou mais ângulos é(são) menor(es) que 1 ou maior(es) que 179`;
  } else return `ERRO: A soma dos ângulos não é 180`;
}

// 6
function xadrez() {
  const peca = "pawn";
  switch (peca.toLowerCase()) {
    case "king":
      return `${peca.toLowerCase()}: One square in any direction, so long as that square is not attacked by an enemy piece. Additionally, kings are able to make a special move, know as castling.`;
    case "queen":
      return `${peca.toLowerCase()}: diagonally, horizontally, or vertically any number of squares. They are unable to jump over pieces.`;
    case "rook":
      return `${peca.toLowerCase()}: horizontally or vertically any number of squares. They are unable to jump over pieces. Rooks move when the king castles.`;
    case "bishop":
      return `${peca.toLowerCase()}: diagonally any number of squares. They are unable to jump over pieces.`;
    case "knight":
      return `${peca.toLowerCase()}: in an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically. They are the only piece able to jump over other pieces.`;
    case "pawn":
      return `${peca.toLowerCase()}: vertically forward one square, with the option to move two squares if they have not yet moved. Pawns are the only piece to capture different to how they move. Pawns capture one square diagonally in a forward direction.
      Pawns are unable to move backward on captures or moves. Upon reaching the other side of the board a pawn promotes into any other piece, except for a king. Additionally, pawns can make a special move named En Passant.`;
    default:
      return `${peca.toLowerCase()} is not a valid chess piece.`;
  }
}

// 7
function notas(a) {
  if (a >= 0 && a <= 100) {
    if (a >= 90) return `A`;
    else if (a >= 80) return `B`;
    else if (a >= 70) return `C`;
    else if (a >= 60) return `D`;
    else if (a >= 50) return `E`;
    else if (a < 50) return `F`;
  } else return `ERRO: A Nota inserida deve estar num intervalo entre 0 e 100`;
}

// 8
function even1of3() {
  const a = 10;
  const b = 15;
  const c = 19;
  if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) return true;
  else return false;
}

// 9
function odd1of3() {
  const a = 11;
  const b = 20;
  const c = 30;
  if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) return true;
  else return false;
}

// 10
function lucro(custo, venda) {
  if (custo >= 0 && venda >= 0) {
    const profit = venda - custo - custo * 0.2;
    return profit;
  } else return `ERRO: Um ou mais valores inseridos foram menores que zero.`;
}

// 11
function liquido(bruto) {
  let salBase;
  let salLiq;
  // INSS ALÍQUOTAS
  // Nível 1
  const inssNivel1 = 1556.94;
  const inssAliq1 = 0.08;

  // Nível 2
  const inssNivel2 = 2594.92;
  const inssAliq2 = 0.09;

  // Nível 3
  const inssNivel3 = 5189.82;
  const inssAliq3 = 0.11;

  // Nível 4
  const inssAliqMax = 570.88;

  // SALÁRIO BASE
  if (bruto > 0 && bruto <= inssNivel1) salBase = bruto - bruto * inssAliq1;
  if (bruto > inssNivel1 && bruto <= inssNivel2)
    salBase = bruto - bruto * inssAliq2;
  if (bruto > inssNivel2 && bruto <= inssNivel3)
    salBase = bruto - bruto * inssAliq3;
  if (bruto > inssNivel3) salBase = bruto - inssAliqMax;

  // IR ALÍQUOTAS
  // Nível 1
  const irNivel1 = 1903.98;

  // Nivel 2
  const irNivel2 = 2826.65;
  const irAliq2 = 0.075;
  const irDed2 = 142.8;

  // Nivel 3
  const irNivel3 = 3751.05;
  const irAliq3 = 0.15;
  const irDed3 = 354.8;

  // Nivel 4
  const irNivel4 = 4664.68;
  const irAliq4 = 0.225;
  const irDed4 = 636.13;

  // Nivel 5
  const irAliqMax = 0.275;
  const irDedMax = 869.36;

  if (salBase > 0 && salBase <= irNivel1) salLiq = salBase;
  if (salBase > irNivel1 && salBase <= irNivel2)
    salLiq = salBase - (salBase * irAliq2 - irDed2);
  if (salBase > irNivel2 && salBase <= irNivel3)
    salLiq = salBase - (salBase * irAliq3 - irDed3);
  if (salBase > irNivel3 && salBase <= irNivel4)
    salLiq = salBase - (salBase * irAliq4 - irDed4);
  if (salBase > irNivel4) salLiq = salBase - (salBase * irAliqMax - irDedMax);

  return salLiq;
}

console.log(liquido(3000));
