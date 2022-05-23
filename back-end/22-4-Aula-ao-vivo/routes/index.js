const express = require('express');
const routes = express.Router();
const usersData = require('../data/users');

routes.get('/users', function (req, res) {
  res.status(200).json(usersData);
}); // criou uma rota do tipo get chamada users, no qual iremos receber uma requisição req e resp, no qual a resp será o status 200 e formato json se tudo ok, passando todos os dados do usersData. Não precisamos desestruturar, então o req não será usado

routes.get('/users/search', function (req, res) {
  const { text } = req.query; // usar a propriedade query onde contém os dados, pesquisar se existe pessoas usuárias com o nome Felipe ou userName como Felipe
  if (!text) return res.status(400).json({message: 'Not Found'}); // Caso não tenha o text pesquisado, retornar status 400 e a msg Not Found
  const users = usersData.filter
  ((user) => user.name.toLowerCase().includes(text.toLocaleLowerCase()) ||
          user.username.toLowerCase().includes(text.toLocaleLowerCase())
  ); //Se existir o text, buscar e filtrar no banco procurar por name
  
  if (!users) return res.status(404).json({message: 'User Not Found'});     
  
  res.status(200).json(users); 

});

// terceira rota usando get:
routes.get('/users/:id', function (req, res) {
  const { id } = req.params;
  const user = usersData.find((user) => user.id === parseInt(id));

  if(!user) return res.status(404).json({message: 'User Not Found'});

  res.status(200).json(user);

});

routes.post('/users', function(req, res) {
  const {id, name, email, phone, age, username} = req.body; // Virá dentro do body da requisição, desestruturar tudo que recebemos lá do body
  usersData.push({id, name, email, phone, age, username}); // "inserir" os dados usando o push
  res.status(201).json({message: 'Insert OK'}); // Devemos fazer vários tratamentos mas pra não dar erro mas por enquanto fica assim
}); // Obs. o POST só mantém os dados até o documento ser salvo novamente{perde os dados na memória}, sendo, os dados inseridos serão apagados (parando o terminal e rodar novamente)

routes.put('/users/:id', function (req, res) { //Informar o usuário a ser atualizado através do id dele
  const { id } = req.params;
  const {name, email} = req.body; // irei atualizar o nome e email
  const userIndex = usersData.findIndex((user) => user.id === parseInt(id)); //verifica se o usuário id existe
  
  if(userIndex === -1) return res.status(404).json({message: 'User Not Exist'})
  
  usersData[userIndex] = {...usersData[userIndex], name, email};  // passando a posição (userIndex); Pegar o que tinha em usarData passando em userIndex e atualizar o que queremos

  res.status(204).end(); // caso não queira retornar nenhuma msg

});

routes.delete('/users/:id', function (req, res) { //Informar o usuário a ser deletado através do id dele
  const { id } = req.params;
  const userIndex = usersData.findIndex((user) => user.id === parseInt(id)); //verifica se o usuário id existe
  
  if(userIndex === -1) return res.status(404).json({message: 'User Not Exist'})
  
  usersData.splice(userIndex, 1); // irá remover o usuário

  res.status(204).end(); // caso não queira retornar nenhuma msg

});

module.exports = routes;// vai estar visível pra ser importado no require