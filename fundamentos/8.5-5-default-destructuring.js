/* Para fixar
Do jeito que está, quando passamos person para a função GetNationality o retorno é João is undefined . Ajuste a função GetNationality para que a chamada GetNationality(person) retorne João is Brazilian. */
const getNationality = ({ firstName, nationality = "Brazilian" }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person)); // João is Brazilian

// defaul AOVIVO

//Exemplo 1
const soma = (a = 0, b = 0) => a + b;

// console.log('dois parametros', soma(2, 3));
// console.log('um parametro', soma(4));
// console.log('sem parametros', soma());

//Exemplo 2
const cervejas = [
  {
    codigo: 123,
    fabricante: 'Urquell',
    descricao: 'Pilsner Urquell 500ML',
    valor: 20,
  },
  {
    codigo: 176,
    fabricante: 'Schornstein',
    descricao: 'Schornstein Imperial 500ML',
    valor: 35.99,
    estoque: 150,
  },
];

// crie uma função que imprima o codigo da cerveja e sua quantidade em estoque.

const quantidadeEmEstoque = (estoque = 0, codigo) => {
  console.log(`A cerveja com o codigo ${codigo} tem ${estoque} em estoque.`);
};

cervejas.forEach((cerveja) => quantidadeEmEstoque(cerveja.estoque, cerveja.codigo));
// crie uma função que some o estoque total de cervejas.