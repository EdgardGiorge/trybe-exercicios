// COMANDOS instalação do arquivos pra teste depois do npm instalado:  	
// npm init -y ,cria o arquivo  package.json
// "test": "jest" ,abra o package.json, na parte de scripts altere o valor do “test”:  "jest", feche o arquivo
// npm install --save-dev jest ,instala o jest
// touch .gitignore~enter~node_modules/~ctrl d~git add .gitignore~enter  , ignora o  node_modules no git

const sum = (a, b) => a + b;

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});
