/* Criando middlewares globais com app.use
Outra forma de utilizar middlewares é quando precisamos reaproveitar um middleware para todas as rotas da nossa aplicação (ou uma boa parte destas). Vamos criar uma forma de autenticar se um determinado usuário pode ter acesso a nossa API de receitas. Para isso, será necessário enviar as informações de nome de usuário e senha pelo Header da requisição (⚠️ Este é um exemplo didático, na prática vamos utilizar abordagens mais seguras de fazer esse tipo de autenticação, por exemplo utilizando JWT).
Vamos começar definindo nosso middleware em um arquivo separado: auth-middleware.js. 

No código abaixo temos um middleware que, ao receber uma requisição, verifica se ela possui no header as informações username e password. Se alguma das informações não foi enviada, esse middleware retorna uma mensagem dizendo que essas informações não podem ser vazias. Na sequência, é feita uma segunda verificação para checar se os valor de username e password são iguais aos valores pré-determinados no objeto validUser (Na prática, em uma aplicação de verdade, esse objeto validUser teria os valores vindo do banco de dados e não hard-coded).
Caso nenhuma dessas opções seja verdadeira, uma resposta é enviada ao client dizendo que não foi possível realizar a autenticação. Ao enviarmos uma resposta para o client, impedimos que qualquer outro middleware seja executado depois desse. Caso esteja tudo certo com o header, o middleware chama a função next que, basicamente, diz ao Express "ok, terminei aqui, pode chamar o próximo que disse que queria saber de requisições pra essa rota".

Observe que adicionamos uma rota, antes do app.use. Aqui é importante destacar que o app.use só afeta as rotas que vem abaixo da sua definição. Ou seja, todas as rotas do nosso CRUD de receitas vão passar pelo middleware de autenticação, enquanto a rota /open não, por que foi definida antes da linha do app.use. Vamos testar: Tente fazer uma requisição para as rotas GET /open e GET /recipes.

Para utilizarmos esse middleware de autenticação, vamos alterar o arquivo index.js:
Copiar
// const express = require('express');
// const bodyParser = require('body-parser');
const authMiddleware = require('./auth-middleware');

// const app = express();
// app.use(bodyParser.json());

// Esta rota não passa pelo middleware de autenticação!
app.get('/open', function (req, res) {
  res.send('open!')
});

app.use(authMiddleware);

Obs. O restante do código pra baixo é o mesmo:
// const recipes = [ 

              Passando valores entre middlewares com objeto req
Middlewares também podem modificar o objeto req, e essas modificações serão recebidas pelos próximos middlewares, caso next seja chamado. Isso geralmente é utilizado para propagar informações de um middleware para o outro.
Por exemplo, vamos considerar que agora temos vários usuários válidos, e ao cadastrar e editar queremos passar o objeto do usuário encontrado para os middlewares do CRUD terem acesso a esse usuário válido.
Observe que tivemos acesso ao objeto req.user que veio do nosso middleware authMiddleware. Dessa forma aproveitando o encadeamento entre middlewares conseguimos passar informações entre middleware sempre que for necessário. O objeto req praticamente aceita qualquer atributo que você quiser definir, só é preciso tomar cuidado para não sobrescrever nenhum dos atributos padrão (req.body, req.headers, req.params, req.query, etc).
Pacotes que são middlewares
Existem alguns pacotes que nos fornecem ferramentas necessárias para o desenvolvimento de nossas aplicações. Um exemplo disso é o módulo body-parser, que utilizamos ontem. Ele é um middleware que lê o corpo da request, cria nela uma propriedade body e coloca o conteúdo do corpo lá. Para utilizá-lo e ter acesso às informações do corpo da request, só precisamos instalá-lo com npm i body-parser e registrá-lo na nossa aplicação:
A função json() utilizada na linha app.use(bodyParser.json()) diz ao body-parser que queremos um middleware que processe corpos de requisições escritos em JSON. Se executarmos nossa API e fizermos uma requisição do tipo POST conseguiremos ter acesso aos valores enviados no body da requisição. Porém, se tirarmos o uso deste middleware, você irá perceber que as requisições do tipo POST não conseguem processar os dados enviados no body da requisição.
ℹ️ Faça o teste ℹ️ : Copie o script abaixo, cole-o em um arquivo chamado server.js e execute-o com o comando node server.js . Em seguida, abra o Postman ou o Insomnia e realize a request POST localhost:3000/hello, passando o JSON { "name": "<seu nome aqui">" }.
Copiar
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/hello', (req, res) => {
  // req.body agora está disponível
  res.status(200).json({ greeting: `Hello, ${req.body.name}!` });
});

app.listen(3000, () => { console.log('Ouvindo na porta 3000'); });
Experimente comentar a linha 5 do script, executar novamente o arquivo e realizar uma nova request para o endpoint POST /hello e perceba que, sem o body-parser, req.body é undefined.
Outro middleware bem comum de utilizarmos nas nossas aplicações back-end é o cors, que permite que nossa API receba requisições de outras aplicações, como por exemplo, uma aplicação front-end que consuma nossa API. O uso básico desse módulo é instalá-lo usando npm i cors e adicionando as seguintes linha no nosso código.
Copiar
const cors = require('cors');

app.use(cors());
Agora, qualquer requisição que você fizer de outra aplicação vai responder, pois temos o middleware cors. Caso não o tivéssemos, o navegador bloquearia as requests do nosso front-end para nossa API. O cors tem um conjunto de configurações que permitem criar regras específicas, de quem e como as requisições podem ser feitas. Por enquanto, não precisamos nos preocupar com isso já que estamos desenvolvendo aplicações apenas em ambiente de desenvolvimento. Porém é importante ter cuidado com essa configuração ao subir uma aplicação para ambiente de produção.
Para aprofundar-se em middlewares, assista a este vídeo.

            Visualizando o conteúdo das requisições no Console
É muito comum, durante a construção de uma API, que a gente tenha dificuldade para visualizar o que está sendo feito por cada endpoint em cada requisição.
Para resolver esse problema, é possível adicionar um middleware que imprimirá no console as informações recebidas no parâmetro req.
Copiar
app.use((req, _res, next) => {
  console.log('req.method:', req.method);
  console.log('req.path:', req.path);
  console.log('req.params:', req.params);
  console.log('req.query:', req.query);
  console.log('req.headers:', req.headers);
  console.log('req.body:', req.body);
  next();
});
Adicionando o código acima, sempre que uma requisição http for executada, o middleware criado imprimirá no console as informações contidas no parâmetro req. Lembrando que isso só afetará as rotas que forem declaradas abaixo da definição do app.use.
❗Importante ressaltar que essa prática não deve ser utilizada em produção, pois serve apenas para dar visibilidade no momento do desenvolvimento.

                        Router middleware
Você deve estar pensando: "Nossa! Mas, com tudo isso, meu arquivo principal vai ficar gigante!" 😱
Calma! O Express tem uma solução bem interessante para organizar nossas rotas e middlewares: o Router.
O Router é um middleware que "agrupa" várias rotas em um mesmo lugar, como se fosse uma versão mini do app do Express. Ele é depois "plugado" no "app principal".
Vamos utilizar o Router para organizar o código que desenvolvemos no conteúdo de ontem.
Copiar
 recipesRouter.js 
const express = require('express');
const router = express.Router();

const recipes = [
  { id: 1, name: 'Lasanha', preco: 40.0, tempoDePreparo: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', preco: 35.0, tempoDePreparo: 25 },
  { id: 3, name: 'Macarrão com molho branco', preco: 35.0, tempoDePreparo: 25 },
];

function validateName(req, res, next) {
  const { name } = req.body;
  if (!name || name === '') return res.status(400).json({ message: 'Invalid data!'});

  next();
};

router.get('/', function (req, res) {
  res.status(200).json(recipes);
});

router.get('/pesquisar', function (req, res) {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.preco < parseInt(maxPrice));
  res.status(200).json(filteredRecipes);
});

router.get('/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));
  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

router.post('/', validateName, function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

router.put('/:id', validateName, function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(500).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

router.delete('/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(500).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

module.exports = router;
Copiar
 index.js 
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Esta rota não passa pelo middleware de autenticação!
app.get('/open', function (req, res) {
  res.send('open!')
});

const recipesRouter = require('./recipesRouter');

 Todas as rotas com /recipes/<alguma-coisa> entram aqui e vão para o roteador. 
app.use('/recipes', recipesRouter);

// app.all('*', function (req, res) {
// 	return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
// });

app.listen(3001, () => { console.log('Ouvindo na porta 3001'); });
Repare no uso de mais um parâmetro na chamada à função app.use. Isso diz ao Express que queremos que aquele middleware (no caso o router) seja executado para qualquer rota que comece com aquele caminho. Repare que, ao registrar uma rota no router, não precisamos repetir a parte do caminho que já passamos para app.use. É por isso que a rota que definimos com router.get('/:id') na verdade se torna acessível através de /recipes/:id.
Routers suportam que qualquer tipo de middleware seja registrado. Ou seja, se tivermos vários endpoints com autenticação e vários endpoints abertos, podemos criar um router, e registrar nele nosso middleware de autenticação, bem como todas as rotas que precisam ser autenticadas, registrando as rotas abertas diretamente no app. Veja abaixo:
Copiar
 recipesRouter.js 
// const express = require('express');
// const router = express.Router();

const authMiddleware = require('./auth-middleware');
router.use(authMiddleware);

// ...

// module.exports = router;
Copiar
 index.js 
// const express = require('express');
// const bodyParser = require('body-parser');
const authMiddleware = require('./auth-middleware');

// const app = express();
// app.use(bodyParser.json());

// Esta rota não passa pelo middleware de autenticação!
app.get('/open', function (req, res) {
	res.send('open!')
});

// Esta rota passa pelo middleware de autenticação!
app.get('/fechado', authMiddleware, function (req, res) {
	res.send('closed!')
});

const recipesRouter = require('./recipesRouter');

Todas as rotas com /recipes/<alguma-coisa> entram aqui e vão para o roteador. 
app.use('/recipes', recipesRouter);

// app.all('*', function (req, res) {
// 	return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
// });


// app.listen(3001, () => { console.log('Ouvindo na porta 3001'); });

*/

const validUsers = [
  { username: 'MestreCuca', password: 'MinhaSenhaSuperSeguraSqn' },
  { username: 'McRonald', password: 'Senha123Mudar' },
  { username: 'Burger Queen', password: 'Senha123Mudar' },
  { username: 'UpWay', password: 'Senha123Mudar' },
];

const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;

  if (!username && !password) {
    return res.status(401).json({ message: 'Username and password can`t be blank!' });
  }

  const foundUser = validUsers.find((user) => user.username === username);

  if (!foundUser) return res.status(401).json({ message: 'Invalid credentials!' });

  if (!(username === foundUser.username  && password === foundUser.password)) {
    return res.status(401).json({ message: 'Invalid credentials!' });
  }

  req.user = foundUser; // Aqui estamos passando o usuário encontrado para o próximo middleware.


  next();
};

module.exports = authMiddleware;