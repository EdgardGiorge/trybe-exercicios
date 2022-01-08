/* foreach. 
Estrutura:
array.forEach((elemento, index, arrayComleto) => {})
Como Funciona:
Funcionalidade como um for, percorre todos os elementos do array. É composto por no máximo 3 parâmetros(sua função interna que é o elemento do array e/ou cada elemento do array, o index que aquele elemento representa, e o array completo). Obs. foreach não possui retorno! */

// Para fixar:
//1- Use o método forEach chamando a callback showEmailList para apresentar os emails
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Adicione seu código aqui

//emailListInData.forEach(showEmailList); // maneira mais simples de fazer.

emailListInData.forEach((item, posicao, array) => {
  showEmailList(item);
  console.log(`sua posição de e-mail é: ${posicao}`);
  console.log(`São ${array.length} e-mails nesta lista!`);
});

// foreach AULA AO VIVO
const nomeDoArray = [1, 21, 301, 41, 501];

// 3 maneiras de escrever a hof de array
// function funcaoParametro(elemento, index, array) {
//   console.log(elemento);
// };

// const funcaoParametro = (elemento, index, array) => {
//   console.log(elemento);
// }

// const funcaoParametro = elemento => console.log(elemento)

/* Estrutura da hof de array:
 nomeDoArray.nomeDaHOF((funcaoParametro)); */

const loopComFor = (arr) => {
  for (let index = 0; index < arr.length; index += 1) {
    console.log('elemento com for', arr[index]);
    console.log('index com for', index);
    console.log('array com for', arr);
  }
};
loopComFor(nomeDoArray);

const loopComForeach = (arr) => {
  const teste = arr.forEach((elemento, index, array) => {
    console.log('elemento com forEach', elemento);
    console.log('index com forEach', index);
    console.log('array com forEach', array);
  });
  return teste;
};
console.log(loopComForeach(nomeDoArray)); // a última linha da undefined porque o foreach não tem retorno
