/* sort 
Estrutura:
Realiza a ordenação dos itens do array, modificando o array original! Sua ordenação é feita pela tabela ASCII, que funciona muito bem pra strings, considerando que todas as primeiras letras dos itens do array seja maiúsculas ou minúsculas. Já para números a ordenação não fica ideal, por isso é necessária uma função para realizar a comparação.
A função recebe 2 parâmetros (a, b), dentro da função é feita uma subtração entre os valores de a e b array.sort((a, b) => a - b); Se o resultado for negativo, o primeiro parâmetro é considerado maior que o segundo, dai eles invertem a posição (o a vai pra trás), caso contrário irá pra frente, isso acontece até que o array fique ordenado de forma crescente. Obs para decrescente a função seria array.sort((a, b) => b - a);

Para fixar
1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente. */
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((arrA, arrB) => arrA.age - arrB.age);// Adicione se código aqui

console.log(people);

// sort AULA AO VIVO
const nomeDoArray = [1, 21, 301, 41, 501];
const letras = ['a', 'F', 'b', 8, '7', '*'];
console.log('letras antes do sort', letras);
const letrasOrdenadas = letras.sort();
console.log('letras depois do sort', letras);
console.log('letras ordenadas', letrasOrdenadas);

console.log('nome do array antes', nomeDoArray);
nomeDoArray.sort((a, b) => a - b);
console.log('nome do array depois', nomeDoArray);

// Dinâmica sort
const estudantes = [
  {
    nome: 'Joel',
    Projeto: 'Trybewarts',
    status: 98,
  },
  {
    nome: 'Mica',
    Projeto: 'Trybewarts',
    status: 100,
  },
  {
    nome: 'Hugonardo',
    Projeto: 'Trybewarts',
    status: 97,
  },
  {
    nome: 'Aninha',
    Projeto: 'Trybewarts',
    status: 100,
  },
  {
    nome: 'Joicy',
    Projeto: 'Trybewarts',
    status: 100,
  },
  {
    nome: 'Ronald',
    Projeto: 'Trybewarts',
    status: 75,
  },
];

// 1 - Tivemos alguns problemas na nossa captura de dados das pessoas estudantes e esses dados estão desordenados, precisamos que eles estejam ordenados em ordem alfabetica.

// escreva sua função aqui.

const ordenarEstudantes = (arr) => {
  arr.sort((a, b) => {
    if (a.nome === b.nome) {
      return 0;
    }
    if (a.nome > b.nome) {
      return 1;
    }
    return -1;
  });
};

ordenarEstudantes(estudantes);
console.log('ordena por nome', estudantes);
// 2 - Tivemos alguns problemas na nossa captura de dados das pessoas estudantes e esses dados estão desordenados, precisamos que eles estejam ordenados por status.

// escreva sua função aqui.

const ordenaEstudantesStatus = (arr) => {
  // essa é a forma reduzida da declaração utilizada anteriorente, quando A for maior retorna positivo, quando forem iguais retorna zero e quando B for maior retorna negativo
  arr.sort((a, b) => a.status - b.status);
};

ordenaEstudantesStatus(estudantes);
console.log('ordena por status', estudantes);
