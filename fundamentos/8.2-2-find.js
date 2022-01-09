/* Estrutura:
array.find((elemento, index, array) => {});
Funcionamento:
Ele busca em todos os elementos do array, o primeiro elemento que satisfaça a condição imposto na função e retorna este elemento.

Para fixar:
1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista: */
const numbers = [19, 21, 30, 3, 45, 22, 15];

/*solução 1: */
// const verify = (number) => number % 3 === 0 && number % 5 === 0;
// const findDivisibleBy3And5 = numbers.find(verify);
// console.log(findDivisibleBy3And5);

/*solução 2: */
const findDivisibleBy3And5 = () => {
 return numbers.find((number) => number % 3 === 0 && number % 5 === 0); 
}
console.log(findDivisibleBy3And5());

/* 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista: */
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return names.find((name) => name.length === 5)// Adicione seu código aqui:
}

console.log(findNameWithFiveLetters());

/* 3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista: */
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  return musicas.find((musica) => musica.id === id)// Adicione seu código aqui
}

console.log(findMusic('31031685'))

// find AULA AO VIVO
//Find encontra o primeiro elemento que satisfaça a condição
// find
const nomeDoArray = [1, 21, 301, 41, 501, 10];
const retornofind = nomeDoArray.find((elemento) => elemento % 2 === 0);
console.log('retorno find', retornofind);
