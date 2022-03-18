// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './store';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Clients from './Clients';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/clients" component={Clients} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

/*
  Conteúdo 15.1 - Introdução ao Redux/15.2 - React com Redux - parte 1 /15.3 - Praticando redux com reac
22/02 - 15.1 - Introdução ao Redux
O que vamos aprender?
No dia de hoje, iremos aprender sobre a biblioteca do Redux . Ela é utilizada para ajudar no gerenciamento de estado e possui ampla adoção entre as pessoas que desenvolvem em React .
Devido ao fato do Redux ser uma biblioteca que tem uma ligação muito forte com o React , é muito comum ver tutoriais e artigos na internet ensinando sobre o Redux já com React . Porém é importante salientar que você não depende do React para utilizá-lo. É possível usar o Redux com qualquer outro framework front-end de sua preferência, ou até mesmo usá-lo com javascript puro. Os exemplos do conteúdo de hoje serão todos com javascript puro, dessa forma vamos manter o foco em entender quais são as peças que compõem o Redux .
Agora, vamos entender um pouco mais sobre o que é, como nasceu e como funciona o Redux !!
Você será capaz de:
Criar uma Store para armazenar o estado de uma aplicação.
Utilizar Reducers e Actions para atualizar a Store
Por que isso é importante?
Como dito anteriormente, Redux é uma biblioteca com ampla adoção na comunidade React , além de contar com implementações que superam as fronteiras do JavaScript , como arquiteturas para desenvolvimento Android e iOS que se baseiam na estrutura de gerenciamento de estado que o Redux traz.
Imagine que você precisa transitar diversas informações entre os mais diversos componentes em React. Imagine também que estas informações descem níveis e mais níveis na hierarquia de componentes. Você concorda que esta manipulação, quando o estado é guardado por componente, é extremamente difícil? Suponha que você tenha um componente X que possui um dado que precisa ser repassado para um componente Y , que está 10 níveis abaixo da hierarquia de componentes. Você precisa passar esse dado para vários componentes no meio, sendo que nenhum deles precisa de tal informação! E se você passar o dado errado de um componente para outro no meio do caminho? Esse problema se chama prop threading (ou drilling), e é um dos problemas que o Redux ataca! 🚀
Quando você, enquanto pessoa que desenvolve software, passa a adotar uma abordagem como a do Redux , significa que você está levando a um outro nível a organização do seu código, endereçando a problemática do parágrafo acima, se preocupando em como transitar as informações entre os componentes e deixando seu código mais organizado e com maior confiabilidade.
Peças do Redux
Como dito anteriormente, Redux é uma biblioteca que pode ser utilizada com algum framework front-end ou com javascript puro (também conhecido como Vanilla JS). Hoje vamos focar em entender o Redux , por isso vamos usar o javascript puro, mas não se preocupe, nos próximos dias vamos aprender como integrar o Redux e o React .
É importante dizer que o Redux vem para resolver problemas de fluxo de informação dentro da sua aplicação, assim como o gerenciamento de seus dados. Você verá que ele ajuda na comunicação entre componentes.



Assim como na vida cotidiana ou no trabalho existem vários fluxos e rotinas que podemos chamar de "modelo de negócio". Por exemplo, quando você vai à padaria, quais são os processos que ocorrem desde a hora que você entra no estabelecimento até sair? Existe todo um fluxo de ações e divisões de responsabilidades das pessoas funcionárias e clientes, correto?
Por essa perspectiva, podemos dizer que existe muita similaridade entre as nossas rotinas e os fluxos de uma aplicação. Cada componente, estado e função têm seus papéis e demandas que precisam ser executadas conforme o "modelo de negócio" do sistema. Isso envolve transmissão de informação - de componentes pais para componentes filhos, filhos dos filhos, filhos para pais, enfim! Nós já vimos que, quando nossa aplicação cresce, a transmissão de informações começa a ficar complicada de se fazer, não é mesmo?
O Redux existe para auxiliar o fluxo de dados dentro da sua aplicação! Com ele você consegue ter, além do estado local de cada componente, um estado global , acessível a todos os componentes , onde se pode armazenar e recuperar informações que precisam ser compartilhadas. Essa ferramenta pode ser dividida em três partes principais - actions , stores e reducers .
Podemos dizer que cada parte tem suas responsabilidades bem definidas, vamos explicar brevemente uma a uma e depois faremos uma analogia para ficar mais fácil compreender.
Actions
As actions , como o nome indica, são as possíveis ações que seu sistema pode executar na store . Elas atuam como uma regra de negócio para manter os dados dos estados da aplicação e as suas mudanças previsíveis e consistentes. É bem comum ouvirmos que as actions são intenções (grave esse termo) de mudança de estado (para usar um termo mais técnico).
Store
A store é onde o estado da sua aplicação fica registrado e protegido. As mudanças ou consultas feitas na store precisam estar definidas anteriormente numa action . Isso garante a integridade dos dados, como explicado anteriormente.
Reducers
Os reducers são responsáveis por manipular a store seguindo as regras definidas pelas actions . Os reducers são importantes para evitar a manipulação direta da store e facilitam a manutenção do código.
Entendendo actions, stores e reducers
Para facilitar o entendimento do funcionamento das actions , stores e reducers , podemos usar algumas analogias com o nosso dia-a-dia. Voltemos ao exemplo da padaria.
Se o Redux fosse uma padaria, a store seria o forno de assar pão, o reducer seria a pessoa que faz o pão, as actions seriam as responsabilidades de quem faz o pão e o (a) cliente seria a aplicação ou o componente (no caso do React) que precisasse de um serviço.
Para a padaria funcionar bem, é importante que cada pessoa e equipamento tenham suas responsabilidades bem definidas, sendo assim, suponhamos que o (a) cliente queira comprar pão.
Primeiramente ele (a) entra na padaria com a intenção de comprar o pão - isso poderia ser assimilado a uma action - ao requisitar pra quem faz o pão, a intenção é executada.
Logo após o pedido, a pessoa que faz o pão - que na nossa analogia é o reducer - vai até o forno ( store ) e finalmente retira um pão de lá. Note que agora o estado do forno mudou, ele possui um pão a menos; o pagamento é feito e o fluxo encerra!
Observe que durante todo o processo, cada agente cumpriu seu papel e não houve conflitos no processo! Exatamente para isso que o Redux foi desenvolvido assim, com as partes bem definidas.
Agora vamos praticar os nossos conceitos e colocar a mão na massa. Obs: podemos testar os códigos a seguir com o Code Runner (abuse do console.log e do debug) Primeiro vamos criar a nossa aplicação e instalar o Redux executando os comandos abaixo no terminal:
npm init -y
npm install redux
Após a instalação, vamos criar uma arquivo index.js e importar o Redux:
const Redux = require(‘redux’);
Agora vamos criar uma pequena store e vamos acessá-la, retornando o estado que guardamos nela e criando uma action para alterá-lo.
Primeiro vamos criar e retornar a nossa store :
const store = Redux.createStore();
Uma store só funciona se passarmos uma função que será responsável por alterar os dados dela: o reducer . O reducer recebe como primeiro parâmetro um state, sendo que seu retorno substituirá o state da store . Para fins didáticos, iremos montar o reducer no mesmo arquivo, mas a boa prática é fazer em um arquivo separado.
const reducer = (state) => {
return state;
};

const store = Redux.createStore(reducer);
Inicialmente o state vem como undefined , e não queremos isto. Então iremos atribuir a ele um valor padrão.
const reducer = (state = { login: false, email: "" }) => {
return state;
};

const store = Redux.createStore(reducer);
Agora sim, nosso reducer está pronto! Mas o que acontece se nosso valor inicial (que podemos chamar de estado inicial) ficar muito grande? Nosso código vai ficar "bagunçado" né?! Então podemos reescrevê-lo.
const ESTADO_INICIAL = {
login: false,
email: "",
};

const reducer = (state = ESTADO_INICIAL) => {
return state;
};

const store = Redux.createStore(reducer);
Nosso reducer está montado e possui o nosso estado inicial da aplicação. Vamos verificar o output quando acessamos a store com a função getState().
const ESTADO_INICIAL = {
  login: false,
  email: "",
};

const reducer = (state = ESTADO_INICIAL) => {
  return state;
};

const store = Redux.createStore(reducer);

console.log(store.getState());

//{ login: false, email: '' }

Mas e se precisarmos alterar o dado que está no estado? A peça que tem esta função é a action ! Uma action é um objeto JavaScript que tem pelo menos uma propriedade type e é responsável por comunicar ao reducer uma mudança a ser feita na store . Em Redux nós utilizamos o actionCreator , que nada mais do que uma função que retorna uma action . Para o nosso exemplo, iremos usar uma actionCreator chamada fazerLogin . Esta função irá enviar uma action ao nosso reducer , com a intenção de alterar para verdadeiro a chave login da nossa store.
const fazerLogin = (email) => ({
  type: "LOGIN",
  email});

const ESTADO_INICIAL = {
  login: false,
  email: "",
};

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default: // No switch, sempre precisamos ter um caso default!
      return state;
  }
};

const store = Redux.createStore(reducer);

store.dispatch(fazerLogin("alguem@email.com"));

console.log(store.getState());

// { login: true, email: 'alguem@email.com' }
Conseguimos mudar o estado da store utilizando o dispatch . Ele despacha nossa action para dentro do reducer , para que nosso estado seja alterado. Note, também, que o reducer retorna todo o estado , e não somente o que será modificado. Retornamos, então, um objeto que contém todos os dados atuais do estado { ...state } mais as chaves que serão modificadas pela action! Mas e se tivermos mais de um reducer?
Combinando Reducers
Como podemos notar, o Redux auxilia bastante o desenvolvimento do nosso projeto, especialmente quando a aplicação se torna muito complexa.
Imagine que a sua aplicação tenha dezenas de componentes e actions diferentes com lógicas específicas e complicadas. Agora suponha que você precise organizar tudo isso em vários reducers , e pior, depois ainda precise passar todos os reducers para um único store ! :fearful:
O problema que você pode já ter notado é justamente esse, como poderíamos unir vários reducers numa aplicação que, normalmente, possui apenas um store?
O Redux já possui uma função para resolver isso, a combineReducers() . Essa função recebe um objeto como parâmetro contendo cada um dos seus reducers como elementos, por exemplo:
// Arquivo index.js

import { combineReducers } from 'redux';
import meuReducer from './meuReducer';
import meuOutroReducer from './meuOutroReducer';

const reducerCombinado = combineReducers({
meuReducer,
meuOutroReducer});

export default reducerCombinado;
Agora basta fazer a sua importação no seu store para a mágica acontecer!
import { createStore } from 'redux';
// Importando o reducer combinado que fizemos logo acima
import reducerCombinado from './reducers/index';

const store = createStore(reducerCombinado);
...
Vamos imprimir essa store com os reducers combinados para verificar o output :
import { createStore } from 'redux';
// Importando o reducer combinado que fizemos logo acima
import reducerCombinado from './reducers/index';

const store = createStore(reducerCombinado);

console.log(store.getState())

//{
// meuReducer: {/_estado do meuReducer_/},
// meuOutroReducer: {/_estado do meuOutroReducer_/,}
//}
…
Agora temos acesso a ambos reducers armazenados na store. Em reducers combinados, as actions podem ser escritas normalmente, pois todos eles escutam a action e só executam a mudança quando a action.type da ação é reconhecida. Ou seja, cada action é enviada para todos os reducers , independente se ele a utiliza ou não, cabendo ao switch administrar a execução da action , com base na propriedade type .
Um detalhe importante é a forma que ocorre o acesso às informações do estado. Considerando que só existisse o meuReducer e que temos uma chave email nele, para acessar o valor dessa chave bastava utilizar state.email , já que o meuReducer era acessado diretamente. Agora, ao utilizar a combinação, é preciso especificar qual o reducer que gerencia este estado, então acessaríamos através de state.meuReducer.email . É como se cada reducer fosse uma gaveta de um arquivo (a store) e, para acessar os dados da gaveta, é preciso abri-la!
Você pode conferir uma explicação mais detalhada neste, tópico da documentação sobre a combinação de múltiplos reducers . Guarde para ler depois!
Outra funcionalidade bastante útil que iremos aprender hoje é o subscribe . Ele adiciona um listener que executará uma callback toda vez que uma action for despachada. Para ilustrar, vamos usar o subscribe junto com nossa store . No nosso exemplo, toda vez que a store sofrer alguma alteração, pegamos nosso estado e fazemos um console.log dele.
import { createStore } from 'redux';
// Importando o reducer combinado que fizemos logo acima
import reducerCombinado from './reducers/index';

const store = createStore(reducerCombinado);

store.subscribe(() => {
  console.log(store.getState());
});
…
Ao vivo:









state =  estado dentro do store, subscribe = só pra ser avisado que algo mudou e a partir dai você faz uma operação(executa uma função), getstate = pega o estado, dispatch = é equivalente ao setState do react, a escrita acontece através de um dispatch e no dispatch nós passamos o que deveria ser a munição, no caso action( o que e quem devemos mudar, é um objeto no qual diz qual a intenção(type) do que queremos fazer dentro da store, 
reducer 1- é sempre uma função, 2- ele vai receber state e action, 3- ele sempre vai devolver um novo estado, ele sempre tem que ser um objeto novo
Exemplo de redux da aula ao vivo:
<!DOCTYPE html>
<html>

<head>
  <title>Redux dark mode example</title>
  <script src="https://unpkg.com/redux@latest/dist/redux.min.js"></script>
  <script defer src="script.js"></script>
  <link rel="stylesheet" href="./style.css" />
</head>

<body>
  <main id="wrapper" class="light">
    <img src="img/light.png" alt="lampada" />
    <button id="light-switch">
      <img src="img/interruptor.png" alt="interruptor" />
    </button>
  </main>

  <script>

    // ============ REDUCER =============
    const initialState = false;
    const reducer = function (state = initialState, action) {
      let newState = state;
      if (action.type === 'CHANGE_MODE')
        newState = action.payload;
      // modificações
      return newState;
    }

    // ============ Armazenamento =============
    //como podemos criar uma store?

    const store = Redux.createStore(reducer);

    // ============ LEITURA =============
    // como ler uma propriedade do state?
    function changeMode() {
      const lightMode = store.getState()
      if (lightMode) {
        document.getElementById('wrapper').className = 'light'
        console.log('light')
      }
      else {
        console.log('dark')
        document.getElementById('wrapper').className = 'dark'
      }
    }

    changeMode();
    store.subscribe(changeMode);

    // ============ ESCRITA =============
    document.getElementById('light-switch').addEventListener("click", () => {
      // ao clicar precisamos alterar o dado
      store.dispatch({ type: 'CHANGE_MODE', payload: !store.getState() });
    });


  </script>


</body>

</html>

// 

*/