/* filter
Estrutura:
array.filter((elemento, index, array) => {});
Funcionamento:
Funciona como um filtro, diante da condição passada na função retorna na forma de um array, todos os elementos que satisfazem a condição. Ele não altera o array original, ele cria um novo.
No exemplo abaixo, apenas substituiremos o find por filter. Verifique que o retorno foi um array com os dois números pares do array numbers.*/
const numbers = [19, 21, 30, 3, 45, 22, 15];
const verifyEven = (number) => number % 2 === 0;
const isEven = numbers.filter(verifyEven);

//console.log(isEven); // [ 30, 22 ]

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.filter((number) => number % 2 === 0);
console.log(isEven2); // [ 30, 22 ]

/* Olhe este outro exemplo de apenas pegar os elementos que não possuem alguma condição. Neste caso, deseja-se apenas as pessoas que não possuem ainda idade para dirigir: */
const objPeople = [
  { name: 'José', age: 21 },
  { name: 'Lucas', age: 19 },
  { name: 'Maria', age: 16 },
  { name: 'Gilberto', age: 18 },
  { name: 'Vitor', age: 15 },
];

const verifyAgeDrive = (arrayOfPeople) => (
  arrayOfPeople.filter((people) => (people.age < 18))
);

console.log(verifyAgeDrive(objPeople));
// [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]

/* Outra forma de se usar o filter é retornar um array sem o elemento desejado. É preciso remover o Ricardo do objeto agora, já que ele não é mais um estudante.
Observe que o filter foi usado dentro de uma função que recebe dois parâmetros, o array de valores e uma string, o que será removido. A condição de dentro do filter é para retornar sempre que o elemento for diferente do name passado. */
const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) =>
  listStudents.filter((student) => student !== name);
  // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.

const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);
console.log(newListStudents); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]

// filter AO VIVO
const numbers1 = [2, 3, 4, 5, 6, 7, 8];

const every = numbers1.every((number) => number % 2 === 0);
console.log('every', every); //Todos os valores são pares? R. false

const some = numbers1.some((number) => number % 2 === 0);
console.log('some', some);//Algum valor é par? R. true

const find = numbers1.find((number) => number % 2 === 0);
console.log('find', find); // O primeiro elemento par é o 2

const filter = numbers1.filter((number) => number % 2 === 0);
console.log('filter', filter); // Traz todos os elementos pares

const filterOdd = numbers1.filter((number) => number % 2 !== 0);
console.log('filter odd', filterOdd);// Traz todos os elementos impares 

// filter em objetos:
const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false },
];

const cantDrive = users.filter((user) => !user.isDriver);
console.log('cant drive', cantDrive); // Traz todos os que não são motoristas isDriver: false

const firstLetter = users.filter((user) => user.firstName[0] === 'M');
console.log('first letter', firstLetter);// filtra os nomes que começam com a letra M

const thirdLetter = users.filter((user) => user.firstName[2] === 'r');
console.log('third letter', thirdLetter);// filtra os nomes que contém a terceira letra r 

const takeOut = users.filter((user) => user.firstName !== 'Bart');
console.log('take out', takeOut);// Retira o Bart da lista e traz todos os outros elementos
