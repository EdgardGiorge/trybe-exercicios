/* eslint-disable no-useless-rename */
const {
  sum: sum,
  summationOf: summationOf,
} = require('./math');

describe('The function sum', () => { // função describe descreve o teste
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('adds 5.1 + 6.55 to equal 11.65', () => {
    // Dá uma espiadinha neste matcher aqui! 🙃
    // Experimente substituir por .toBe() para ver o que acontece. 😉
    expect(sum(5.1, 6.55)).toBeCloseTo(11.65);
  }); // toBeCloseTo ,matcher pra números em ponto flutuante o resultado pode ser aproximadamente igual (ponto flutuante tem variação nas casas decimais)

  it('adds 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('adds -5 + (-39) to equal -44', () => {
    expect(sum(-5, -39)).toBe(-44);
  });

  it('adds 0 + (-10) to equal -10', () => {
    expect(sum(-0, -10)).toBe(-10);
  });
});

// eslint-disable-next-line max-lines-per-function
describe('The function summationOf', () => { // função describe descreve o teste
  it('exists', () => { // ela(it), a função summationOf existe?
    expect(typeof summationOf).toBe('function');
  });

  it('returns 1 when the input is 1', () => { // O somatório de 1 tem que ser igual a 1
    expect(summationOf(1)).toBe(1);
  });

  test('returns 6 when the input is 3', () => { // O somatório de 3 tem que ser igual a 6
    expect(summationOf(3)).toBe(6);
  });

  test('returns 15 when the input is 5', () => { // O somatório de 5 tem que ser igual a 15
    expect(summationOf(5)).toBe(15);
  });

  test('throws an error when the input is an empty string', () => { // Joga um erro quando a entrada da função é uma string vazia
    expect(() => {
      summationOf('');
    }).toThrow(); // matcher toThrow captura uma exceção Obs. este matcher tem que envolver a função dentro de uma outra função pra ele não gerar erro
  });

  test('throws an error when the input is undefined', () => { // Joga um erro quando a entrada da função for indefinida
    expect(() => { summationOf(); }).toThrow(); //Obs. este matcher tem que envolver a função dentro de uma outra função pra ele não gerar erro
  });
});