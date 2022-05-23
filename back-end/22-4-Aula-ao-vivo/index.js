/* Receber requisições do front-end e enviar as informações solicitadas
1 - No terminal:
  a- comando npm init -y (inicia o node Y = com as perguntas padrões respondidas)
  b- comando npm i express (instalar a primeira biblioteca)
  c- comando npm i cors (instalar a segunda biblioteca, explicarei abaixo seu uso "CORS")
  d- comando npm i nodemon -D (terceira lib atualiza automaticamente {sem precisar dar "ctrl c" e depois "node index.js" na linha de comando pra dar start na aplicação, não se recomenda usar em ambiente de produção}, -D = apenas em ambiente de desenvolvimento)

Obs. "CORS" =  Mecanismo de segurança pra identificar de qual endereço ip virá as requisições, se não usar da um erro no chrome dizendo que a api não tem o cors instalado, esta api pode receber req de qualquer lugar, neste caso aqui não fizemos configuração disso, o cors tem outras aplicações , pesquisar! 

2 - No packet json:
  a- Habilitar o nodemon:
    Em "scripts": 
      "dev": "nodemon index.js"

3 - Criar arquivo separado as rotas:
  a- No arquivo index.js:
    const express = require('express'); // chama o express
    const cors = require('cors'); // chama o cors
    const app = express(); // a aplicação será gerência-da pelo express
    app.use(express.json()); // vai utilizar formato de dados json
    app.use(cors()); // Permite gerência-r de quem virá as requisições para o back(qual ip)
    app.use('/sistema', require('./routes/index')); // de onde iremos utilizar o conjunto de rotas, o sistema é o nome que adicionei para usar um nome fixo na url (sistema é só um exemplo, poderia ser outro nome ex de como ficaria a url:/http://localhost:3001/sistema/<nome da rota>). No segundo parâmetro dizer aonde estão minhas rotas(require('./routes/index'), o index.js é pra dar o start e ter as configurações gerias.
    app.listen(3001, () => {
      console.log('Aplicação da aula ao vivo na porta 3001');
    }); // qual é a porta que iremos utilizar e saber quando iniciou
  b- Criar o diretório routes e criar um index.js lá dentro
  c- Trabalhar com as rotas:
    Em ./routes/index.js:
      const express = require('express');
      const routes = express.Router(); // Seleção e Roteamento das nossas rotas solicitada
      
4 - Trazer um conjunto de dados a ser explorado:
    a- Crie um diretório chamado data
    b- Crie um arquivo chamado users.js dentro do diretório data, neste arquivo de exemplo teremos um array de objetos contendo informações de usuários fictícios (id, nome, email etc)

5 - Fazer a importação dos dados do ./data/users.js
    a- No ./routes/index.js:
      const usersData = require('../data/users'); // importa os dados
      
6 - Criar a primeira rota:
  Antes utilizávamos a app.get que vinha do express, agora vamos utilizar o express mas com a rota diretamente, chamando o recurso express.Routes e usar o routes.get:
  a- No ./routes/index.js:
  routes.get('/users', function (req, res) {
  res.status(200).json(usersData);
}); // criou uma rota do tipo get chamada users, no qual iremos receber uma requisição req e resp, no qual a resp será o status 200 e formato json se tudo ok, passando todos os dados do usersData. Não precisamos desestruturar, então o req não será usado 
  b- Exportar routes:
    module.exports = routes;// vai estar visível pra ser importado no require
    
7 - start da aplicação pra testar o que foi feito até o momento:
  No terminal:
    a- comando npm run dev
    b- Na extensão do Thunder Client:
      Escolha o método GET e digite a a url:
        http://localhost:3001/sistema/users
  Obs. Podemos criar collections no Thunder Client, que seriam como se fosse sistemas/API's:
  - Collections -> New Collection = Trybe
  - Trybe -> New Folder = Users (leva o nome da rota, pra receber só AS rotas users)
  - Users -> New Request = GET USERS 
  - coloque a url desejada: http://localhost:3001/sistema/users
  
8 - Criar a segunda rota: 
  a- Procurar por dados através da query.params(onde contém os dados)  que surgir no navegador como chave valor:
routes.get('/users/search', function (req, res) {
  const { text } = req.query; // usar a propriedade query onde contém os dados, pesquisar se existe pessoas usuárias com o nome Felipe ou userName como Felipe
  if (!text) return res.status(400).json({message: 'Not Found'}); // Caso não tenha o text pesquisado, retornar status 400 e a msg Not Found
  const users = usersData.filter
  ((r) => r.name.toLowerCase().includes(text.toLocaleLowerCase()) ||
          r.username.toLowerCase().includes(text.toLocaleLowerCase())
  ); //Se existir o text, buscar e filtrar no banco procurar por name
  
  if (!users) return res.status(404).json({message: 'User Not Found'});     
  
  res.status(200).json(users); 

});
  b- No Thunder Client /Trybe/Users:
    - Criar uma new request chamada GET SEARCH
    - Em Query Parameters: parameter = text value = <Nome a ser pesquisado> (ex.Felipe ou Felicia)

9 - "Inserir dados usando POST":
  a- Inserir um corpo na requisição [usado pra inserção de registros no banco ou para realizar uma autenticação]:
    Em Thunder Client -> new request -> POST USERS -> usar o método POST e inserir a url http://localhost:3001/sistema/users -> Em body colocar dados de um usuário ex: (Estes são os dados que irei enviar para o meu back-end):
    {
    "id": 11,
    "name": "Edgard Giorge",
    "email": "edgardgiorge@hotmail.com",
    "phone": "(11) 99478-4579",
    "age": 56,
    "username": "edgardgiorge"
    }
  b - Fazer a rota pra receber estes dados acima:
    Em ./routes/index.js:
      routes.post('/users', function(req, res) {
        const {id, name, email, phone, age, username} = req.body; // Virá dentro do body da requisição, desestruturar tudo que recebemos lá do body
        usersData.push({id, name, email, phone, age, username}); // "inserir" os dados usando o push
        res.status(201).json({message: 'Insert OK'}); // Devemos fazer vários tratamentos mas pra não dar erro mas por enquanto fica assim
      }); // Obs. o POST só mantém os dados até o documento ser salvo novamente{perde os dados na memória}, sendo, os dados inseridos serão apagados (parando o terminal e rodar novamente)

10 - Usando o PUT:
  a - Realizar a rota pra atualização:
    Em ./routes/index.js:
      routes.put('/users/:id', function (req, res) { //Informar o usuário a ser atualizado através do id dele
        const { id } = req.params;
        const {name, email} = req.body; // irei atualizar o nome e email
        const userIndex = usersData.findIndex((user) => user.id === parseInt(id)); //verifica se o usuário id existe
        
        if(userIndex === -1) return res.status(404).json({message: 'User Not Found'})
        
        usersData[userIndex] = {...usersData[userIndex], name, email};  // passando a posição (userIndex); Pegar o que tinha em usarData passando em userIndex e atualizar o que queremos

        res.status(204).end(); // caso não queira retornar nenhuma msg

      });
  b - Realizar a requisição de atualização no Thunder Client:
    new request -> UPDATE USER -> usar o método PUT e inserir a url http://localhost:3001/sistema/users/11 -> Em body colocar dados de um usuário ex: (Estes são os dados que irei atualizar para o meu back-end):
      {
        "name": "Edgard Giorge de Souza",
        "email": "edgardgiorge@gmail.com"        
      }
      
11 - Usando o Delete:
  a - Realizar a rota pra apagar o usuário:
    Em ./routes/index.js:
      routes.delete('/users/:id', function (req, res) { //Informar o usuário a ser deletado através do id dele
        const { id } = req.params;
        const userIndex = usersData.findIndex((user) => user.id === parseInt(id)); //verifica se o usuário id existe
        
        if(userIndex === -1) return res.status(404).json({message: 'User Not Exist'})
        
        usersData.splice(userIndex, 1); // irá remover o usuário

        res.status(204).end(); // caso não queira retornar nenhuma msg

      });
  b - Realizar a requisição de delete no Thunder Client:
     new request -> DELETE USER -> usar o método DELETE e inserir a url http://localhost:3001/sistema/users/3 , pra pagar o usuário 3-> Send

12 - Quiser enviar pra outra pessoa testar estas requisições no Thunder Client:
  Trybe -> Export -> Salvar (Obs. Não consegui salvar, pelo Postman de acordo com o instrutor funciona)
*/

const express = require('express'); 
const cors = require('cors');

const app = express(); 

app.use(express.json());
app.use(cors()); 
app.use('/sistema', require('./routes/index')); 

app.listen(3001, () => {
  console.log('Aplicação da aula ao vivo na porta 3001');
});