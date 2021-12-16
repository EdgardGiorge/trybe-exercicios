//O Object.values segue a mesma lógica que o Object.keys , a diferença está em que ele lista os valores de cada chave. Voltando ao nosso exemplo anterior, como faríamos para listar os valores de cada chave do nosso objeto coolestTvShow ? Utilizando o for...in seria algo como: 
const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

console.log(Object.values(coolestTvShow));

//Resposta: ['BoJack Horseman','adult animation','Raphael Bob-Waksberg','Princess Carolyn','Princess Carolyn always lands on her feet.' 6 ]

//outro exemplo 1 sem Object.values o 2 com Object.values:

//Exemplo1:
const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const listSkillsValuesWithFor = (student) => {
  const skills = [];
  for (index in student) {
    skills.push(student[index]);
  }
  return skills;
}
console.log(listSkillsValuesWithFor(student));

// Com Object.values
const listSkillsValuesWithValues = (student) => Object.values(student);
console.log(listSkillsValuesWithValues(student));

// ou sem passar por função, chamar direto:
console.log(Object.values(student));
