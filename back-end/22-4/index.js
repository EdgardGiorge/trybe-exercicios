// const express = require('express');

// const app = express(); // 1 - Criar uma nova aplicação Express;

// app.listen(3001, () => {
//   console.log('Aplicação ouvindo na porta 3001');
// }); // 2 - Pedir ao Express que crie um servidor HTTP e escute por requisições na porta 3001;

// app.get('/hello', handleHelloWorldRequest); // 3 - Dizer ao Express que, quando uma requisição com método GET for recebida no caminho /hello, a função handleHelloWorldRequest deve ser chamada;

// function handleHelloWorldRequest(req, res) {
//   res.status(200).send('Hello World, Giorge!');
// }; // 4 - Ao tratar uma requisição com método GET no caminho /hello, enviar o status HTTP 200 que significa OK e a mensagem 'Hello World!' O "req" é o objeto que encapsula todas as informações da requisição da aplicação, é o "res" é o objeto que trata a resposta que irá fornecer da nossa aplicação .

/* Para iniciar a aplicação, execute o comando abaixo no diretório da aplicação:

 "node index.js" ou "npm start" se no packeage.json incluir no scripts o "start": "node index.js" . obs para não ter que parar a aplicação e fazer o start novamente, podemos usar o nodemon (apenas em ambiente de desenvolvimento), pra isso instale o pacote "npm i nodemon -D" e no package.json , ao invés de usar o script start , use o script "dev": "nodemon index.js",sendo... no terminal digite "npm run dev", agiliza mas não deve ser usado em produção!
 */


/* Estruturando uma API
Para entendermos na prática como utilizar o Express e o seu sistema de rotas para criar uma API funcional, vamos partir do seguinte cenário: temos uma aplicação que permite gerenciar uma lista de receitas disponíveis, com seus respectivos nomes, preços e tempos médio de preparo. Essa aplicação é uma API que implementa um CRUD, ou seja, um conjunto de endpoints que permite listar, pesquisar, cadastrar, editar e remover os itens dessa lista de receitas. Até o final do dia, você vai implementar uma API que permite fazer todas essas operações.
Vamos começar implementando o endpoint que retorna a lista de receitas na rota /recipes quando a requisição for do tipo GET. A lista de receitas virá de uma array definido no código. Siga o exemplo abaixo: */

const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('./auth-middleware');
const cors = require('cors');

app.use(cors());

const app = express();
app.use(bodyParser.json());

app.get('/open', function (req, res) {
  res.send('open!')
});

app.use((req, _res, next) => {
  console.log('req.method:', req.method);
  console.log('req.path:', req.path);
  console.log('req.params:', req.params);
  console.log('req.query:', req.query);
  console.log('req.headers:', req.headers);
  console.log('req.body:', req.body);
  next();
});

app.use(authMiddleware);

// ...
function validateName(req, res, next) {
  const { name } = req.body;
  if (!name || name === '') return res.status(400).json({ message: 'Invalid data!'});

  next();
};

app.post('/recipes', validateName, function (req, res) {
  const { id, name, price } = req.body;
  const { username } = req.user; // Aqui estamos acessando o usuário encontrado no middleware de autenticação.
  recipes.push({ id, name, price, chef: username });
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.put('/recipes/:id', validateName, function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipesIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipesIndex === -1)
    return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipesIndex] = { ...recipes[recipesIndex], name, price };

  res.status(204).end();
});
// ...



app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', function (req, res){
  res.json(recipes);
});

/* Agora, ao invés de utilizar o método .send, você vai utilizar o método .json. O método .send é um método que consegue retornar a resposta de uma requisição de uma forma genérica, adaptando o tipo do retorno ao que será retornado. Mas, para deixar mais evidente que o que vai ser devolvido é um JSON, utilize o método .json.
Para testar a aplicação você pode fazer uma requisição usando o próprio navegador, colocando a URL http://localhost:3001/recipes. Porém, como nem todo tipo de requisição HTTP pode ser feita diretamente pelo navegador, é recomendado utilizar algum cliente HTTP. Os mais famosos são o Postman e o Insomnia (Eu usei uma extensão do vscode chamada Thunder Client no lugar dos dois recomendados).
Existe uma terceira possibilidade: usar um comando chamado httpie que permite fazer uma requisição direto pelo terminal. Para instalar esse comando siga as instruções da documentação.
Uma vez instalado, execute o comando abaixo:
http :3001/recipes */

app.get('/recipes/search', function (req, res) {
  const { name } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name));
  
  res.status(200).json(filteredRecipes);
});
/* Para o exemplo, vamos definir uma rota /pratos/pesquisar?nome=Macarrão que permita, inicialmente, buscar uma lista de receitas filtrando pelo nome. Utilize o código acima.
Perceba, que nessa rota, foi utilizado req.query e o atributo nome foi desestruturado, para, na sequência, usar como parâmetro de busca. Dessa vez usamos uma outra HOF, a função filter, para filtrar as receitas que contenham (.includes) o nome recebido através da query string e no final a lista de receitas obtidas por esse filtro é devolvida.
Note que a rota ficou apenas com o prefixo /recipes/search, já que os parâmetros enviados via query string não dependem desse prefixo e sim das informações que vem após o uso da ? na URL. É importante entender que é possível colocar na URL quantos parâmetros forem necessários, desde que eles sigam o formato <chave>=<valor> e que entre cada parâmetro exista o & para definir que ali está sendo passado um novo parâmetro.
⚠️ Observação: Quando houver rotas com um mesmo radical e uma delas utilizar parâmetro de rota, as rotas mais específicas sempre devem ser definidas antes. Isso porque, ao resolver uma rota, o Express verifica rota por rota qual corresponde à URL que chegou. Se a rota for /recipes/search depois da rota /recipes/:id, o Express vai entender a palavra search como um id e vai chamar a callback da rota /recipes/:id. Tenha atenção a esse detalhe ao utilizar rotas similares na definição da sua API.
Faça a requisição para testar esse novo endpoint.*/

app.get('/recipes/:id', function (req, res){
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({message: 'Recipe not found'});

  res.status(200).json(recipe);
});
/* No código acima, o que fizemos foi adicionar uma rota /recipes/:id. Qualquer rota que chegar nesse formato, independentemente do id ser um número ou string, vai cair na segunda rota (ao invés de cair na rota /recipes definida no tópico anterior). Para acessar o valor do parâmetro enviado na URL é feita a desestruturação do atributo id do objeto req.params. Note que o objeto req traz informações a respeito da requisição. É importante que o nome do parâmetro nomeado na rota seja igual ao atributo que você está desestruturando. Por exemplo, se na definição da rota estivesse escrito /recipes/:nome teríamos que usar const { nome } = req.params.
Na sequência usamos uma função que você conheceu lá no bloco sobre HOF, o find. Você vai usar várias HOF daqui em diante, então caso você tenha esquecido ou ainda tenha dúvidas sobre o uso delas, recomendamos fortemente que você revisite o conteúdo do bloco de HOF para dar uma revisada sobre o uso dessas funções. 😉
Você implementou uma busca no array receitas para encontrar a receita onde o id é igual ao valor reebido como parâmetro, tendo o cuidado de converter o valor para inteiro, já que por padrão todo parâmetro de rota é uma string. No final, retornou o objeto receita que corresponde a receita encontrada. 🥳
Mas e se o id chegar na rota for formado por letras? 🤔
Esse código ainda não está tratando possíveis cenários de erro, porque o foco por enquanto é entender como montar a API, vamos falar desses possíveis tratamentos de erros em um momento mais a frente. Combinado?
⚠️ Atenção: Perceba que na linha com o if possui um return. Isso serve para indicar para o Express que ele deve quebrar o fluxo e não executar a linha res.status(200).json(recipe);. Caso você não coloque o return, sua requisição vai funcionar mas você verá, no log do seu terminal, um erro como este abaixo:
Copiar
Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
Esse erro significa que o Express entendeu que você está tentando retornar duas respostas para o cliente:
uma com o código HTTP 404, para quando a receita não foi encontrada;
outra com o código HTTP 200, com a receita encontrada.
O return previne esse tipo de erro, desviando o fluxo do código de acordo com o if. Portanto, é preciso ter cuidado e colocar um return sempre que houver uma condição que possa desviar do fluxo principal.
Este é um erro bem comum para quem está começando a utilizar Express, mas a partir de agora você já sabe o que fazer caso tenha esse problema! 😎 

Vamos agora refatorar o código para que ele também seja capaz de filtrar pelo preço máximo, passando um segundo parâmetro através da query string.
// ...

app.get('/recipes/search', function (req, res) {
	const { name, maxPrice } = req.query;
	const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < parseInt(maxPrice));
	res.status(200).json(filteredRecipes);
})

// ...
Não foi preciso alterar a definição da rota, apenas foi feita uma alteração no código da callback para desestruturar também o atributo maxPrice do objeto req.query. Além disso, foi adicionada uma condição na chamada da função filter para filtrar os objetos pelo nome e pelo valor do atributo maxPrice enviado na requisição. Teste o endpoint depois da modificação. Você pode testar usando no navegador a URL http://localhost:3001/recipes/search?name=Macarrão&maxPrice=40*/

// RECEBENDO DADOS NO BODY DA REQUISIÇÃO

/*Toda requisição HTTP, possui um cabeçalho e um corpo, como foi mencionado anteriormente. Mas o que isso significa na prática?
Acabamos de ver que é possível receber dados da URL via query string, porém imagine que você precisa salvar dados sensíveis como uma senha ou o número de algum documento importante. Se enviar isso na URL qualquer pessoa que conseguir espiar o tráfego de rede entre o cliente e o servidor vai ter acesso a essas informações. Uma forma que o protocolo HTTP encontrou para resolver isso foi criando o tráfego através do corpo da requisição, onde o que acontece é uma compressão dos dados enviados que só serão descomprimidos do lado do back-end. Além de não deixar as informações trafegadas tão expostas, isso deixa a requisição um pouco mais rápida, já que ocorre um processo de serialização dos dados enviados. Porém, aqui cabe um detalhe: para enviar dados no body da requisição, geralmente você precisa usar algum tipo específico de requisição, como por exemplo, utilizando o verbo HTTP POST. Até então só vimos exemplos de rotas mapeadas para o verbo GET. Vamos ver como fica agora para esse novo verbo.
Antes disso, precisamos fazer uma pequena etapa que é instalar o pacote bodyParser. Como explicamos, os dados enviados pelo front-end são comprimidos, e para conseguir remontar os dados enviados precisamos parsear as informações para um formato compreensível para o back-end, esse formato no caso vai ser JSON. Para instalar esse pacote execute o comando:
Copiar
npm i body-parser
Agora no arquivo index.js, faça a modificação abaixo:
Copiar
// const express = require('express');
const bodyParser = require('body-parser');

// const app = express();
app.use(bodyParser.json());

// ...
Agora, implemente a rota que vai receber dados no body da requisição:
Copiar
// ...
app.post('/recipes', function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});
Perceba, que a rota /recipes está repetida, só que agora usando o método .post. No Express, é possível ter rotas com o mesmo caminho desde que o método (ou verbo) HTTP utilizado seja diferente, na outra rota foi definido o que acontece para o método GET. Por falar nisso, fica a pergunta: como fazer requisições já que, por padrão, as requisições feitas ou no navegador ou no fetch api são do tipo GET? 🤔
Comece pelo fetch-api, usando o código abaixo:
Copiar
fetch(`http://localhost:3001/recipes/`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    id: 4,
    name: 'Macarrão com Frango',
    price: 30
  })
});
Diferente do que foi feito para fazer uma requisição do tipo GET, dessa vez um segundo parâmetro é passado, que é um objeto formado pelos atributos method, headers, body. Você vai entender o que é cada um.
method: Método HTTP utilizado. Existem 4 que são mais utilizados (GET, POST, PUT e DELETE);
headers: Define algumas informações sobre a requisição como o atributo Accept que diz qual o tipo de dado esperado como resposta dessa requisição e o Content-Type que sinaliza que no corpo da requisição está sendo enviado um JSON;
body: É o corpo da requisição. Como no HTTP só é possível trafegar texto, é necessário transformar o objeto JavaScript que você quer enviar para uma string JSON. Por isso que do lado do back-end é necessário utilizar o bodyParser para transformar as informações que foram trafegadas como string JSON, de volta para um objeto JavaScript.
Não é possível fazer requisições POST diretamente pelo navegador como foi feito para requisição para rota GET /recipes. Por isso, você deve utilizar aplicações como o Insomnia ou Postman para fazer requisições de qualquer tipo diferente do GET. Vamos usar o HTTPie para executar nossa requisição.
Copiar
http POST :3001/recipes id:=4 name='Macarrão com Frango' price:=30 // execute apenas essa linha!
> HTTP/1.1 201 Created
> Connection: keep-alive
> Content-Length: 32
> Content-Type: application/json; charset=utf-8
> Date: Sat, 21 Aug 2021 19:26:46 GMT
> ETag: W/"20-bnfMbzwQ0XaOf5RuS+0mkUwjAeU"
> Keep-Alive: timeout=5
> X-Powered-By: Express
>
> {
>     "message": "Recipe created successfully!"
> }
Nos campos id e price foi utilizado := enquanto em name apenas =. Isso acontece pois o operador = envia os dados como string, enquanto com := o dado é enviado como número.
⚠️ Observação: Como você está trabalhando com a lista de receitas através de um array, sempre que a aplicação é reiniciada, o array volta ao formato original, com os 3 objetos definidos direto no código. Portanto, caso as receitas que você cadastrou sumam repentinamente da listagem, provavelmente foi por essa causa, os dados estão apenas armazenados em memória.
Voltando para o código para entender a implementação:
Copiar
// ...

app.post('/recipes', function (req, res) {
	const { id, name, price } = req.body;
	recipes.push({ id, name, price});
	res.status(201).json({ message: 'Recipe created successfully!'});
});

// ...
Na primeira linha os atributos id, name e price foram desestruturados do objeto req.body para que, na segunda linha, esses valores sejam utilizados para inserir um novo objeto dentro do array receitas. Na terceira, e última linha, a resposta foi retornada com o status 201, que serve para sinalizar que ocorreu uma operação de persistência de uma informação e um json com o atributo message. Pronto, agora você tem uma rota que permite cadastrar novos receitas no array! 👏
E o headers?
Assim como é possível enviar informações no body da requisição, também é possível enviar informações no header da mesma. Imagine que você precisa ter uma rota que recebe um token para ser validada, a regra da validação é checar se o token possui 16 caracteres:
Copiar
// ...

app.get('/validateToken', function (req, res) {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'})';

  res.status(200).json({message: 'Valid Token!'})'
});

// ...
Para fazer uma requesição (request) enviando informações no headers por meio do HTTPie, você pode usar o seguinte comando:
Copiar
http :3001/validateToken Authorization:abc # vai devolver token inválido
http :3001/validateToken Authorization:S6xEzQUTypw4aj5A # vai devolver token válido
Diferente de informações enviadas no corpo da requisição que usavam = ou := para determinar o valor de um atributo, é definido os atributos do headers usando :, pssando a chave Authorization que é uma chave bem comum de se utilizar nesse tipo de autenticação. No conteúdo de amanhã você vai ver exemplos mais práticos sobre o uso de headers. Por enquanto é mais uma forma de enviar dados para nossa API.
Veja o vídeo abaixo que consolida parte do nosso aprendizado até aqui ou se preferir avance para a próxima seção.
*/

//Exemplo do verbo POST do vídeo (POST neste formato, apenas recebe a requisição do cliente):

// app.post('/recipes', (req, res) => {
//   recipes.push({id: 4, name: 'Porpeta', price: 30, waitTime: 20});
//   res.send('Prato Porpeta adicionado com sucesso!')
// });

//Enviar alguma informação do cliente pro servidor:

//1- Usar a biblioteca "body-parser" (ja instalados no packet json pelo comando  npm i body-parser) que irá pegar os dados que vem de uma requisição e passear para JSON pra conseguirmos utilizar dentro da nossa aplicação, lembrar que temos que importar a biblioteca: //const bodyParser = require('body-parser'); // linha 24 no topo do código substituir o const express = require('express'); pelo bodyParser
//app.use(bodyParser.json()); // 2- Já coloquei esta linha no topo do código

const langs = ['HTML', 'CSS']

app.get('/langs', (req, res) => {
  res.send(langs);
});

app.post('/langs', (req, res) => { //Middlewares são as funções que tratam o request e response (req, res)!
  const {name} = req.body;
  langs.push(name);
  res.send(`O nome ${name} da requisição da rota '/langs' adicionado com sucesso!`)
});// 3- Extraia os dados do objeto req.body que é o lugar onde encapsula todos os dados que são enviados pelo cliente, agora no navegador(no meu caso no Thunder client), execute a seguinte requisição de exemplo: recipes id:=4 name='Porpeta' price:=30 waitTime:=20

/*          ATUALIZANDO E DELETANDO OBJETOS ATRAVÉS DA API
Além dos métodos GET E POST, o HTTP também possui os métodos PUT e DELETE que são convencionalmente utilizados para rotas que, respectivamente, editam e removem objetos. O Express tem métodos específicos para definir rotas para esses dois verbos. Por exemplo, para utilizar o *PUT:
Copiar
// ...

app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});
// ...
Observe que foi definida uma rota que recebe o id como parâmetro de rota e os campos name e price através do body da requisição. É um padrão sempre mandar o id como parâmetro de rota e os atributos que serão alterados no body, pois é uma boa prática do RESTful, conteúdo que você vai aprender mais à frente. Em seguida, foi usado o método find para encontrar a receita correspondente ao id e atualizar os atributos para os valores recebidos. Por fim, uma resposta HTTP com o status 204 foi devolvida, que serve para indicar que algo foi atualizado. O método .end() foi utilizando, indicando que a resposta vai ser retornada sem retornar nenhuma informação.
Para fazer essa requisição usando o HTTPie, utilize o comando abaixo:
Copiar
http PUT :3001/recipes/2 name='Macarrão ao alho e óleo' price:=40 # execute apenas essa linha!
> HTTP/1.1 204 No Content
> Connection: keep-alive
> Date: Fri, 20 Aug 2021 22:19:35 GMT
> ETag: W/"25-ySvLeHwVHESCh2r//vitH6caTaI"
> Keep-Alive: timeout=5
> X-Powered-By: Express
Ao utilizar o .end() na callback da rota PUT /recipes/:id, nada foi retornado, apenas o status 204, que indica que a requisição foi concluída com sucesso.
Agora é a vez de implementar uma rota que permita remover receitas da lista. Para isso, você vai criar uma rota para requisições do tipo DELETE no caminho /recipes/:id:
Copiar
//...

app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

//...
Note que, novamente, o id foi utilizado como parâmetro de rota. Essa é uma convenção que serve para que sempre que você precisar trabalhar com id, seja para pesquisar, editar e/ou remover objetos através da API. É possível fazer a mesma coisa enviando o id como query string ou no body da requisição, porém usar parâmetro de rota acaba sendo a forma mais simples de mandar esse tipo de dado entre todas as opções disponíveis.
Faça uma requisição usando o HTTPie novamente:
Copiar
http DELETE :3001/recipes/3 # execute apenas essa linha!
> HTTP/1.1 204 No Content
> Connection: keep-alive
> Date: Fri, 20 Aug 2021 22:25:44 GMT
> ETag: W/"23-nD7qnlOhswfi0qOrye68khRdynU"
> Keep-Alive: timeout=5
> X-Powered-By: Express
Novamente, por ter usado o status HTTP 204, a resposta da requisição vem sem trazer um conteúdo. Tudo bem, já que o objetivo dessa rota é apenas excluir um registro do array de receitas.
Hora de testar 💻: Faça a requisição para listar as receitas e conferir se a receita com id 3 realmente foi removida.
No front-end, para fazer requisições do tipo PUT e DELETE através do fetch api você pode utilizar os exemplos de código abaixo:
Copiar
// Requisição do tipo PUT
fetch(`http://localhost:3001/recipes/2`, {
  method: 'PUT',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Macarrão ao alho e óleo',
    price: 40
  })
});

// Requisição do tipo DELETE
fetch(`http://localhost:3001/recipes/4`, {
  method: 'DELETE',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
});
Para Fixar
Crie uma rota PUT /drinks/:id que permita editar os atributos de uma bebida.
Crie uma rota DELETE /drinks/:id que permita remover uma bebida.
O que acontece se fizer uma requisição para uma rota que não existe?
Se você tentar fazer uma requisição para uma rota que não mapeou na API, você vai observar que o Express retorna a seguinte resposta:
Copiar
http GET :3001/xablau
> <!DOCTYPE html>
> <html lang="en">
> <head>
> <meta charset="utf-8">
> <title>Error</title>
> </head>
> <body>
> <pre>Cannot GET /xablau</pre>
> </body>
> </html>
Porém, essa não é uma forma muito compreensível de entender que essa rota /xablau não foi mapeada. Para retornar uma resposta mais amigável você pode usar o método app.all da seguinte forma:
Copiar
//...
app.all('*', function (req, res) {
	return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001);
Agora se você tentar acessar uma requisição para uma rota não mapeada, vai ter a seguinte resposta:
Copiar
{
    "message": "Rota '/xablau' não existe!"
}
O método app.all serve para mapear uma rota que pode ser de qualquer verbo HTTP e o valor * é um wildcard, ou seja um expressão coringa que indica que independente da rota que chegar aqui ele vai capturar e executar a callback que por sua vez retorna uma resposta com status 404.
⚠️ Cuidado: Essa definição de rota generalista com app.all('*') deve ser sempre a última definição de rota da API. Caso contrário, algumas requisições podem cair antes nesta callback e não executar a callback para a rota específica. Para exemplificar, defina uma callback para responder a rota /xablau:
Copiar
//...
app.all('*', function (req, res) {
	return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

// nunca vai chegar nessa rota!
app.get('/xablau', function (req, res) {
	return res.status(404).json({ message: `Xablau!`});
});

app.listen(3001);
Se você fizer a requisição com o código acima, vai ver que o Express vai continuar trazendo a mesma resposta "Rota '/xablau' não existe!". Agora inverta as duas definições de rotas de lugar e observe que a resposta retornada passa a ser a correta:
Copiar
//...

// agora vai chegar nessa rota!
app.get('/xablau', function (req, res) {
	return res.status(404).json({ message: `Xablau!`});
});

app.all('*', function (req, res) {
	return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001);
Copiar
http :3001/xablau
> {
>     "message": "Xablau!"
> }

                    CONCLUSÃO
Você finalizou o dia de hoje tendo o primeiro contato com o Express, seu sistema de roteamento e entendendo como aplicações front-end podem se comunicar com uma aplicação back-end. 😄
Você também aprendeu as diferentes formas de enviar dados para o back-end como route params, query string e através do body e header da requisição. Na próxima aula, você vai entender melhor algumas características específicas do Express.
Para fixar esse aprendizado, assista a aula ao vivo e pratique bastante o conteúdo com os exercícios propostos! 🧑‍💻
Abaixo está a versão completa da sua primeira API. 🤩
Copiar
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const recipes = [
  { id: 1, name: 'Lasanha', preco: 40.0, tempoDePreparo: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', preco: 35.0, tempoDePreparo: 25 },
  { id: 3, name: 'Macarrão com molho branco', preco: 35.0, tempoDePreparo: 25 },
];

app.get('/recipes', function (req, res) {
  res.status(200).json(recipes);
});

app.get('/recipes/pesquisar', function (req, res) {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.preco < parseInt(maxPrice));
  res.status(200).json(filteredRecipes);
});

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));
  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

app.post('/recipes', function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

app.all('*', function (req, res) {
	return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

*/