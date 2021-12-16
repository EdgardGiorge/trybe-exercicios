// const sum = (value1, value2) => value1 + value2;
// console.log(sum(2, 3));
//Para garantir que a função receba apenas números ao invés de strings por exemplo, pra não quebrar o código do exemplo acima, podemos colocar uma condicional (if):
// const sum = (value1, value2) => {
//   if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//     return 'Os valores devem ser numéricos';
//   }
//   return value1 + value2;
// };
//console.log(sum(2, '3'));

//No caso acima, a função retornou uma msg de string, quando ela deveria lançar um fluxo de execução onde, indica o erro e interrompe a função, usando o throw new Error('msg de erro'):
// const sum = (value1, value2) => {
//   if(typeof value1 !== 'number' || typeof value2 !== 'number') {
//     throw new Error('Os valores devem ser numéricos');
//   }
//   return value1 + value2;
// }
// console.log(sum(2, '3')); //deve dar o seguinte erro... throw new Error('Os valores devem ser numéricos');     ^  Error: Os valores devem ser numéricos

//O try/catch: Enquanto o try tenta executar o código com sucesso, o catch é chamado caso ocorra um erro.
//Devemos criar um fluxo para quando nosso código é executado com sucesso, representado pelo bloco try , que tenta fazer a soma de dois valores. Esse bloco chama a função recém-criada verifyIsNumber , que verifica se os parâmetros passados são números. Quando se depara com um valor que não é um número, o código lança um erro com o throw , que é capturado pelo catch no fluxo de exceção, através da variável error (aqui podemos usar qualquer nome). Dentro do catch retornamos a chave error.message , uma propriedade do objeto nativo Error que contém a mensagem de erro criada anteriormente:
const verifyIsNumber = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
};

const sum = (value1, value2) => {
  try {
    verifyIsNumber(value1, value2);
    return value1 + value2;
  } catch (error) {
    throw error.message;
  }
};

//console.log(sum(2, '3')); // Entrada NOK, descomente pra ver a msg de erro 
console.log(sum(2, 3)); // Entrada OK com valores esperados(number)!