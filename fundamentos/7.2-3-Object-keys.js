//Objet.keys :

//objetc.keys ,lista(array) as chaves de um objeto, retornando-as em um array. Cada entrada do array retornado será uma string com o valor de cada chave do objeto. 

//Antes fazíamos isso com um for in, agora usamos o método object.keys:

const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

//  for in:
// for (const property in coolestTvShow) {
//   console.log(property);
// }

// object.keys:
console.log(Object.keys(coolestTvShow));

// Resposta: [ 'name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons' ]

// Outros exemplos de uso:

//Nesse exemplo estão listadas as habilidades de uma pessoa desenvolvedora.
//Exercício: Tente criar uma função que exiba as habilidades do objeto student . Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade". Obs. Use método Object.keys e a estrutura de repetição for...in em conjunto. Além disso, pode usar a mesma função para iterar sobre os dois objetos, mesmo o segundo tendo uma chave a mais que o outro.
const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for(index in arrayOfSkills){
    console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
  }
};

console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);

const typeofarray = [1,2,3,4,5]; // Todo array é um objeto com 'esteroides'
console.log(typeof(testarray));