/* Para Fixar
Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro. */
const multiply = (number, value = 1) => {
  // Escreva aqui a sua função
  return number * value
};

console.log(multiply(8));

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
