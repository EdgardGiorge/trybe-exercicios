/*spread pode ser utilizado para combinar objetos e arrays, para copiar valores de objetos iteráveis, e em funções que recebem múltiplos argumentos.
Espalhar os valores de arrays e objetos
Estrutura:
variável1 = [‘1’, ‘2’, ‘3’ ,’4’]; 
variável2 = [‘5’, ‘6’, ‘7’];
varjunta = [...variável1, ...variável2]; // [‘1’, ‘2’, ‘3’ ,’4’, ‘5’, ‘6’, ‘7’];
varjunta+ = [‘0’, ...variável1, ‘9’, ...variável2]; // [‘0’, ‘1’, ‘2’, ‘3’ ,’4’, ‘9’, ‘5’, ‘6’, ‘7’];

Para fixar
Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens , faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread. */
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maçã', 'pêra'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'aveia', 'mel'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  const fruitSaladaWithAdditional = [...fruit, ...additional];
  return fruitSaladaWithAdditional;
};

console.log(fruitSalad(specialFruit, additionalItens));

//spread operator AO VIVO

//spread operator em array
// Crie um array com todos os elementos dos dois arrays abaixo:

const horrorBooks = ['It', 'The Shining'];
const scifiBooks = ['I, Robot', 'Caves of Steel', 'The End of Eternity'];

// loop

const generoLivros = (array1, array2) => {
  const arrayAux = [];
  array1.forEach((livro) => arrayAux.push(livro));
  array2.forEach((livro) => arrayAux.push(livro));
  return arrayAux;
};
console.log('array com loop', generoLivros(horrorBooks, scifiBooks));

// spread
const generoLivroSpread = [...scifiBooks, ...horrorBooks];

console.log('array com spread', generoLivroSpread);

//spread operator em Objetos , nos objetos que estiverem a chave com o mesmo nome ele sobrescrevbe

// crie um objeto como a junção dos objetos abaixo

const pessoa = {
  nome: 'Ronald',
  idade: 18.5,
};
const nota = {
  Js: 7.5,
  Css: 7,
  nome: 8,
};

const novoObjeto = { ...pessoa, ...nota };

console.log(novoObjeto);


//spread operator em números

// crie uma função de soma que some 3 elementos

const numeros = [2, 3, 4];

const soma = (a, b, c = 0, d = 0) => a + b + c + d;

console.log(soma(numeros[0], numeros[1], numeros[2]));
console.log(soma(...numeros));

