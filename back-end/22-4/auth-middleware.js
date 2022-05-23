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



*/

const validUser = {
  username: 'MestreCuca',
  password: 'MinhaSenhaSuperSeguraSqn'
};

const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;

  if (!username || !password) {
    return res.status(401).json({ message: 'Username or password can`t be blank!' });
  }

  if (username !== validUser.username || password !== validUser.password) {
    return res.status(401).json({ message: 'Invalid credentials!' });
  }

  next();
};

module.exports = authMiddleware;