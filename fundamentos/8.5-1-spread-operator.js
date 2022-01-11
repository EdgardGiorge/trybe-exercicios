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

