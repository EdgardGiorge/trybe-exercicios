// OBJETIVO: DEIXAR NÍTIDO QUE FUNÇÃO É UM TIPO COMO OUTRO QUALQUER

const pi = 3.14159265359;
console.log(pi.toFixed(2));

const greetings = 'Hello, HOF!';
console.log(greetings.split(' '));

const isValid = true;
console.log(isValid.valueOf());

const person = {
  name: 'Alcione',
  age: 39,
};
console.log(Object.keys(person));

const names = ['José', 'Madalena', 'Epaminondas'];
names.pop();
console.log(names);
names.push('Hugo');
console.log(names);

const sayHello = () => console.log('Hello, HoF\'s!');
// console.log(typeof sayHello);

// sayHello.call(); // .call() é pra invocar a função que usamos abreviado como... sayHello();
const fun = sayHello;

fun();

/**
 * Retorna o produto da multiplicação entre dois números.
 *
 * @param {number} fator1 primeiro fator da multiplicação
 * @param {number} fator2 segundo fator da multiplicação
 */
 function multiplicar(fator1, fator2) {
  let acumulador = 0;

  for (let contador = 0; contador < fator2; contador += 1) {
    acumulador += fator1;
  }

  return acumulador;
}

const result = multiplicar(4, 5); // não importa como a função esta multiplicando e sim um resultado
console.log(result);

// OBJETIVO 1: ENTENDER O QUE É UMA HOF
// OBJETIVO 2: ENTENDER POR QUE UMA HOF É ÚTIL
// OBJETIVO 3: ENTENDER COMO FAZER UMA HOF

let sociedade = [
  'Chaves',
  'Chiquinha',
  'Kiko',
  'Seu Madruga',
  'Bruxa do 71',
  'Seu Barriga',
  'Professor Girafales',
  'Pópis',
  'Nhonho',
  'Godines',
];

/**
 *
 * @param {Array} pessoas
 * @param {Function} condicao
 * @returns
 */
function eliminar(pessoas, condicao) {
  const acumulador = [];

  for (let index = 0; index < pessoas.length; index += 1) {
    const nomeDaPessoa = pessoas[index];
    if (condicao(nomeDaPessoa)) {
      acumulador.push(nomeDaPessoa);
    }
  }

  return acumulador;
}

function condicaoNaoComecaComS(nome) { // função com várias linhas
  return nome[0] !== 'S';
}

console.log('----------- antes de eliminar com S -----------');
console.table(sociedade);

sociedade = eliminar(sociedade, condicaoNaoComecaComS);

console.log('----------- depois de eliminar com S -----------');
console.table(sociedade);

sociedade = eliminar(sociedade, (nome) => nome[0] !== 'C'); // função com uma linha só

console.log('----------- depois de eliminar com C -----------');
console.table(sociedade);

sociedade = eliminar(sociedade, (nome) => nome[0] !== 'P');

console.log('----------- depois de eliminar com P -----------');
console.table(sociedade);

sociedade = eliminar(sociedade, (nome) => nome.length <= 5);

console.log('----------- depois de eliminar com nome com mais de 5 letras -----------');
console.table(sociedade);

const pessoaDitadora = 'Dona Florinda';
console.log(`A pessoa ditadora é a ${pessoaDitadora}!`);