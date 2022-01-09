/* some
Estrutura:
array.some((elemento, index, array) => {});
Funcionamento:
Verifica se ao menos um dos elementos do array cumpre a condição da função e retorna true.

every
Estrutura:
array.every((elemento, index, array) => {});
Funcionamento:
Verifica se todos os elementos do array cumpre a condição da função e retorna true.

Conteúdo:
O exemplo abaixo usa o some para verificar se possui algum nome que começa com a letra desejada: */
const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];
const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);
console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false

//O exemplo abaixo usará o every para verificar se o estudante passou em todas as matérias: Observe que foi usado Object.values junto com o every. Como o Object.values retorna um array apenas com os valores do objeto, o every percorrerá esse array retornado. Interessante essa combinação de funções, hein?!
const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => (
  Object.values(studentGrades).every((grade) => grade === 'Aprovado')
);

console.log(verifyGrades(grades));

/* Para fixar
1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some; |*/
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((currentName) => currentName === name);//Adicione seu código aqui
}

console.log(hasName(names, 'Ana'))

// 2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false, use every;
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  return arr.every((person) => person.age >= minimumAge);//Adicione seu código aqui
}

console.log(verifyAges(people, 18));

// find AULA AO VIVO
const nomeDoArray = [1, 21, 301, 41, 501];
// every
const pri = [];
const retornoEveryPri = pri.every((elemento) => elemento % 2 !== 0);
const retornoEvery = nomeDoArray.every((elemento) => elemento % 2 !== 0);

console.log('retorno every', retornoEvery);
console.log('retorno every pri', retornoEveryPri);

// some
const retornoSome = nomeDoArray.some((elemento) => elemento % 2 === 0);
const retornoSomePri = pri.some((elemento) => elemento % 2 === 0);

console.log('retorno some', retornoSome);
console.log('retorno some pri', retornoSomePri);
