/* Para Fixar
Agora é hora de praticar: altere a função getPosition utilizando a property shorthand. */

// const getPosition = (latitude, longitude) => ({
//   latitude: latitude,
//   longitude: longitude});

// console.log(getPosition(-19.8157, -43.9542));

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude});

console.log(getPosition(-19.8157, -43.9542));

// property shorthand -  AO VIVO
//forma curta de escrever um objeto
const nome = 'Ronald';
const sobrenome = 'Lima';

const nomeCompleto = {
  nome,
  sobrenome,
};

 console.log('nome completo', nomeCompleto);

module.exports = {
  nomeCompleto,
};
