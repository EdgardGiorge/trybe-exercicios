// Método pra copiar objeto e suas propriedades, se a chave tiver o mesmo nome ela sobrescreve o valor ex.!
const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)

/* Output
  { name: 'Alberto',
  lastName: 'Gomes',
  age: 23,
  job: 'engenheiro',
  children: [ 'Maria', 'João' ],
  wife: 'Ana'
  } */

// Se fizermos o clone ele muda as propriedades do objeto destino...
const person1 = {
  name: 'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const clone = Object.assign(person1, lastName);

console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
console.log(person1); // { name: 'Roberto', lastName: 'Silva' }

//a variavel clone criada é apenas pra modificar ou acessar os dados do objeto destino (neste caso o person1), 

clone.name = 'Maria';

console.log('Mudando a propriedade name através do objeto clone')
console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
console.log(person1); // Output: { name: 'Maria', lastName: 'Silva' }
console.log('--------------');

person.lastName = 'Ferreira';

console.log('Mudando a propriedade lastName através do objeto person');
console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
console.log(person1); // Output: { name: 'Maria', lastName: 'Ferreira' }

//abaixo uma outra forma de clonar objeto
const obj = { value1: 10, value2: 11 };
const cloneObj = obj;

//Como faremos para mudar os dados do novo objeto criado sem modificar o objeto inicial?
//Resposta: O primeiro parâmetro do Object.assign, deve ser um objeto vazio {}, e armazena seu retorno em uma nova variável:

const person2 = {
  name:'Roberto',
};

const lastName2 = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person2,lastName2);
newPerson.name = 'Gilberto';
console.log(newPerson); // { name: 'Gilberto', lastName: 'Silva' }
console.log(person2);   // { name: 'Roberto' }
