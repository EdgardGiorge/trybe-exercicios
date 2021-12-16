//ternary operator: (uma maneira de fazer uma condicional (if else), que só tenham duas possibilidades de resposta ( x se verdadeiro , y se falso )
// se a for maior que b , c irá ser = 10, caso contrário c =20
     let a = 5;
     let b = 6;
     let c = 0;
     //a > b ? c = 10 : c = 20 // primeira opção de descrição
     c= a > b ? 10 : 20 // segunda opção de descrição
     console.log(c);

//Exemplo1:
const trueExpression = (1 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
console.log(trueExpression) // irá imprimir no console: isso é verdade

//Exemplo2:
// Situação em que é mais simples usar o operador ternário:
const checkIfElse = (age) => {
  if (age >= 18) {
    return `Você tem idade para dirigir!`;
  } else {
    return `Você ainda não tem idade para dirigir...`;
  }
};

const checkTernary = (age) => (
  age >= 18 ? `Você tem idade para dirigir!` : `Você ainda não tem idade para dirigir...`
);
console.log(checkTernary(43));
// ------------------------

// Situação em que usar o operador ternário não faz muito sentido:
// const checkIfElse = (fruit) => {
//   if (fruit === `maçã`) {
//     return `Essa fruta é vermelha`;
//   } else if (fruit === `banana`) {
//     return `Esta fruta é amarela`;
//   } else {
//     return `Não sei a cor`;
//   }
// };

// const checkTernary = (fruit === `maçã`) ? `Essa fruta é vermelha` 
//   : ((fruit === `banana`) ? `Esta fruta é amarela` : `Não sei a cor`);

// Aninhar operadores  ternários, como no exemplo acima, não é uma boa prática,
// pois torna o seu código truncado e difícil de ler, tirando todo o sentido de um
// operador cujo objetivo é facilitar a sua vida e a da pessoa que lerá seu código
// no futuro!

