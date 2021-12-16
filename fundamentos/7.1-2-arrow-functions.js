// Você já está craque em declarar funções em JavaScript utilizando a seguinte sintaxe:
// função normal:
// const printName = function () {
//   const myName = 'Giorge';
//   return myName;
// }
// console.log(printName());
// A expressão acima está correta. Mas como você verá nos exemplos a seguir, é possível deixá-la ainda mais direta e léxica. Você aprenderá com alguns exemplos as vantagens de usarmos mais essa novidade do Javascript ES6 - arrow functions . Uma das aplicações para arrow functions é em funções anônimas. Em Javascript, é muito comum não precisarmos nomear funções, como mostrado no exemplo acima. Isso pode acontecer quando criamos funções que não serão reutilizadas, ou que serão passadas como argumento para uma outra função. Chamamos funções sem um nome específico de funções anônimas.

//arrow functions nada mais é do que uma forma diferente de se declarar funções escrevendo menos código. Veja abaixo como ficaria a função printName utilizando a sintaxe da arrow function :
// função arrow finctions:
// const printName = () => {
//   const myName = 'Giorge';
//   return myName;
// }
// console.log(printName());

// Quando não há nada no corpo da função além do que será retornado, a sintaxe da arrow function nos permite simplificar ainda mais a função printName omitindo o return e as chaves:
const printName = () => 'Giorge';
console.log(printName());

//Mas lembre-se que podemos omitir os parênteses apenas em um cenário, quando a função recebe apenas um argumento, como podemos ver no exemplo abaixo:
const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(5));

//Em funções que recebem mais de um parâmetro, os parênteses não são omitidos:
const multiplication = (number, multi) => number * multi;
console.log(multiplication(5, 4));

// Arrow functions com objetos, devemos colocar parênteses () no corpo da função para o as chaves do objeto não dar erro na função:
const objetoPessoa = (paramNome, paramIdade) => ({nome: paramNome, idade: paramIdade});
console.log(objetoPessoa('Giorge', 42));

objetoPessoa.idade = 43; // uma const não pode ser reatribuída, mas suas propriedades sim
console.log(objetoPessoa.idade);


//Exemplo da video aula: (Esta função contará a quantidade de palavras, colocando um espaço no (' '),se fosse (''), contava a quantidade de caracteres)
const contaPalavra = (frase) => frase.split(' ').length;
console.log(contaPalavra('Estou sabendo tudo de Arrow functions!!!'));
