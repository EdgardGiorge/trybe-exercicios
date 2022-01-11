/* reduce
Estrutura:
array.reduce((acumulador, elemento, index, array) => {}, valor inicial)
Funcionamento:
Diferente das demais HOF's, o reduce possui um acumulador como parâmetro da função, ele acumula qualquer valor,array,objeto e é o próprio retorno da função. Só é nessário escrever na função o que seu acumulador guarde:
acumulador + elemento --> para número
acumulador.push(elemento) --> para array
{acumulador ,[chave]: valor} --> para objetos
Caso queira que o retorno do acumulador seja o maior valor, o retorno do if deve ser o próprio acumulador, caso ele seja menor do que o valor de comparação, ele se torna o maior automáticamente. Uma caracterísitica do acumulador é que ele pode ter um valor inicial, definidi logo após a função. Sem esse valor inicial, o acumulador torna o primeiro elemento do array como valor inicial. O reduce também percorre todo array. */

const collection = [1, 2, 3, 4, 5];

const getSum = (accumulator, number) => {
  console.log(accumulator); // 1 3 6 10
  return accumulator + number;
};

const sumNumbers = collection.reduce(getSum);
console.log(sumNumbers); // 15

//O reduce possui uma outra diferença: você pode passar um segundo parâmetro para o reduce, logo após a função:
const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum1 = (result, number) => {
  console.log(result); // 0 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers1 = numbers.reduce(getSum1, 0); // Parâmetro adicionado ao reduce: o "0"
console.log(sumNumbers1); // 113

/* Neste exemplo, serão comparados valores para buscar o maior valor em um array. Tente criar essa função apenas com for e depois tente com reduce.
A função passada agora pode possuir dois tipos de retorno:
O retorno do próprio acumulador bigger (no caso true do ternário), o que significa que ele não será modificado; ou
O valor do elemento do array, number , que indica que possui um valor maior que bigger .
Modifique o segundo parâmetro passado, o 0 , no reduce para 100 e execute o programa. O retorno agora é 100 , já que nenhum número de dentro do array é maior que o valor inicial passado. Então veja: a cada iteração, o reduce mantém o valor do acumulador igual ou o atualiza de acordo com a comparação que é feita. Ao final, você tem o maior valor do array. Adicione um console.log à função do reduce para ver isso acontecendo em detalhes, se quiser!
Caso não consiga, olhe a solução abaixo: */
const numbers1 = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers1.reduce(getBigger, 0);
console.log(bigger); // 85

///faça uma função que some todos os números pares do array:
const numbers2 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumPair = (currentValue, number) => (
  (number % 2 === 0) ? currentValue + number : currentValue
);

const sumNumbers2 = (array) => array.reduce(sumPair, 0);

console.log(sumNumbers2(numbers2)); // 152

//Agora crie uma função usando os dados dos estudantes que usamos no conteúdo do dia anterior, para mostrar na tela um relatório que diz em qual matéria o estudante foi melhor. Você usará tanto o map quanto, dentro dele, o reduce!

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

const getBestClass = (acc, materia) => {
  if (acc.nota > materia.nota) return acc;
  return materia;
};

const reportBetter = (students) => students.map((student) => ({
  name: student.nome,
  materia: student.materias.reduce(getBestClass).name}));

console.log(reportBetter(estudantes));

// reduce AO VIVO

//explicação ao vivo
// O que é o reduce??????
// É uma Hof, e como as outras funciona como um laço de repetição mas é muito mais poderosa.
// PQ? pq podemos retornar o que quisermos com o reduce, fazer qualquer combinação que quisermos!
// Como funciona?

const numeros = [2, 3, 4, 5];

const funcaoReducer = (acumulador, valorCorrente, index, array) => {
  console.log('acumulador antes', acumulador);
  console.log('valor corrente', valorCorrente);
  // console.log('index', index);
  // console.log('array', array);
  if (valorCorrente % 2 !== 0) {
    acumulador[`${valorCorrente}`] = valorCorrente;
    console.log('acumulador dentro', acumulador);
    console.log('-------------------');
    return acumulador;
  }
  // acumulador = true;
  console.log('acumulador depois', acumulador);
  console.log('-------------------');
  return acumulador;
};

const resultadoReduce = numeros.reduce(funcaoReducer, {});

console.log('O valor do reduce é: ', resultadoReduce);

// exercícios1 ao vivo
// 1. Somar todos os elementos do array `numeros`

// function soma() {
//   let total = 0;

//   numeros.forEach((value) => {
//     total += value;
//   });

//   return total;
// }

const numeros1 = [3, 4, 5, 6, 7, 8];

const funcaoReducer1 = (acumulador, valorCorrente, index) => {
  console.log('acumulador antes', acumulador);
  console.log('valor corrente', valorCorrente);
  console.log('index', index);
  acumulador += valorCorrente;
  console.log('acumulador depois', acumulador);
  console.log('----------------');
  return acumulador;
};

const somaComReduce = numeros1.reduce(funcaoReducer1);

console.log('Esse é o valor da soma do reduce: ', somaComReduce);

// exercícios2 ao vivo
// Encontre o maior valor no array de numeros

const numeros2 = [3, 4, 5, 6, 7, 8];

const funcaoReducer2 = (acumulador, valorCorrente) => {
  console.log('acc', acumulador);
  console.log('valor', valorCorrente);
  if (valorCorrente > acumulador) {
    acumulador = valorCorrente;
    console.log('acc depois', acumulador);
    // return acumulador;
  }
  return acumulador;
};

const maiorNumero = numeros2.reduce(funcaoReducer2);

console.log('O maior valor é : ', maiorNumero);

// exercícios3 ao vivo
const { cervejas, pedidos, entregas, cities, states, regions } = require('./8.4-2-data');

/*
 * 3. Criar um array de objetos com as seguintes informações
 *
 * - id do pedido
 * - descriçao da cerveja
 * - quantidade de cervejas do pedido
 * - placa do veiculo que vai fazer a entrega
 */

const funcaoReducer3 = (acumulador, valorCorrente) => {
  const objeto = {
    id: valorCorrente.id,
    descricao: cervejas.find((codigo) => codigo.codigo === valorCorrente.codigoCerveja).descricao,
    quantidade: valorCorrente.quantidade,
    placa: entregas.find((codigo) => codigo.pedidoId === valorCorrente.id).placaVeiculo,
  };
  acumulador.push(objeto);
  return acumulador;
};

const arrayDeObjetos = pedidos.reduce(funcaoReducer3, []);

console.log('O array formado é: ', arrayDeObjetos);
console.log ('fim do exercícios 3---------------');

// exercícios4 ao vivo
/*
 * Transforme o array de cidades em um objeto no seguinte formato:
 *
 * const output = {
 *   N: [
 *     { city: 'Manaus', state: 'Amazonas', region: 'Norte' },
 *     { city: 'Manaus', state: 'Amazonas', region: 'Norte' },
 *   ],
 *   NE: [
 *     { city: 'Feira de Santana', state: 'Bahia', region: 'Nordeste' },
 *     { city: 'Feira de Santana', state: 'Bahia', region: 'Nordeste' },
 *     { city: 'Feira de Santana', state: 'Bahia', region: 'Nordeste' },
 *   ],
 *   etc...
 * };
 * cidade
 * { state: 'AM', name: 'Manaus', region: 'N' },
 * estado
 * { short: 'AM', name: 'Amazonas' },
 * regiao
 * { short: 'N', name: 'Norte' },
*/

const funcaoReducer4 = (acumulador, valorCorrente) => {
  // console.log('valor corrente', valorCorrente);
  if (acumulador[valorCorrente.region] === undefined) {
    acumulador[`${valorCorrente.region}`] = [];
  }
  const objeto = {
    city: valorCorrente.name,
    state: states.find((estado) => estado.short === valorCorrente.state).name,
    region: regions.find((region) => region.short === valorCorrente.region).name,
  };
  acumulador[`${valorCorrente.region}`].push(objeto);
  return acumulador;
};

const arrayEmObjeto1 = cities.reduce(funcaoReducer4, {});

console.log('O objeto final é: ', arrayEmObjeto1);