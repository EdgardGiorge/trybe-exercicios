/* eslint-disable object-shorthand */
function sum(value1, value2) {
  return value1 + value2;
}

/**
 * Implemente uma função `summationOf(number)` que recebe um número
 * inteiro e retorna o seu [somatório](https://pt.wikipedia.org/wiki/Somat%C3%B3rio).
 *
 * Por exemplo:
 *
 * - `summationOf(1)` retorna 1: soma de 1 até 1 = 1
 * - `summationOf(3)` retorna 6: soma de 1 até 3 = 1 + 2 + 3 = 6
 * - `summationOf(5)` retorna 15: soma de 1 até 5 = 1 + 2 + 3 + 4 + 5 = 15
 */
function summationOf(value) {
  if (value === '') { // verifica se ele tem um valor , se não, envia a msg de erro abaixo
    throw Error('summationOf deve receber um valor'); // lançou uma exceção 
  }

  // number é um número?
  const number = Number(value); // Converteu a string em um number com o construtor do tipo Number, pro value convertido 
  if (Number.isNaN(number)) { // O objeto Number verifica se o value não é um número (isNam) 
    throw Error('summationOf deve receber apenas números');
  }

  let accumulator = 0;

  for (let index = 1; index <= value; index += 1) { // realiza o somatório
    accumulator += index; //pega o valor do index atual e soma com o valor do acum. 
  }

  return accumulator;
}

if (typeof module !== 'undefined') { // module.exports, não existe no html para que ele não de log de erro no html usa este if (ele não existe no browser) 
  module.exports = { // quando existe mais de uma função, usa-se estrutura de objeto
    sum: sum,
    summationOf: summationOf,
  };
}