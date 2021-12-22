// COMANDOS instalação do Jest e arquivos pra teste depois do npm instalado:  	
// npm init -y ,cria o arquivo  package.json
// "test": "jest" ,abra o package.json, na parte de scripts altere o valor do “test”:  "jest", feche o arquivo
// npm install --save-dev jest ,instala o jest
// touch .gitignore~enter~node_modules/~ctrl d~git add .gitignore~enter  , ignora o  node_modules no git
// Arquivos com extensões .test ou spec são usados pra descrever o teste (sum.test.js). Arquivos js nós já conhecemos (sum.js)
// Só iremos usar a função ou objeto, damos o seguinte dado: require('./nomeDoModulo';) ,recebe qual identificador do módulo que queremos importar, neste caso se estiver na mesma pasta, referencia o nome do arquivo sem a extensão ./conteudo1  
// Já no arquivo js (sum.js), cada arquivo é um módulo, usamos o módulo do js "module" pra exportar uma função ou objeto com a propriedade export : modeule.export = "nome da função ou objeto";
//const sum = (a, b) => a + b; // esta função descrita agora pode ser inserida em um arquivo js

const sum = require('./7.3-1-sum');
  test('sums two values', () => {
    expect(sum(2, 3)).toEqual(5);
  });

