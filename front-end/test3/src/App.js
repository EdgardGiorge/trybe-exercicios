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
            Conteúdo 

            15.1 - Introdução ao Redux/15.2 - React com Redux - parte 1 /15.3 - Praticando redux com reac
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

//            23/02 - 15.2 - React com Redux - parte 1

Por que isso é importante?
Redux é uma ferramenta para gerenciar o estado de uma aplicação JavaScript . Antes de entender o porquê de utilizar React com Redux , deve-se entender o porquê de utilizarmos uma biblioteca externa para controlar e gerenciar o estado de uma aplicação.
A maioria das bibliotecas, como React , Angular etc, possuem uma forma interna de gerenciar o estado da aplicação sem o auxílio ou necessidade de uma ferramenta externa. Isto funciona bem para aplicações que possuem poucos componentes mas, à medida que a aplicação cresce, o gerenciamento de estados compartilhados entre componentes torna-se uma tarefa complicada e desgastante.
Em uma aplicação em que muitos dados são compartilhados entre componentes, pode não ficar muito nítido onde cada dado deve ficar. Além disso, algumas vezes pode-se criar uma implementação que não é ideal. Por exemplo: em uma aplicação onde é necessário compartilhar os dados com vários componentes filhos, necessariamente esse dado deve ficar no componente pai. Aplicações maiores também apresentam a necessidade de compartilhar dados entre componentes que não estão na mesma árvore de componentes. Para esse compartilhamento ser feito, esse dado terá de passar através de muitos componentes até chegar em seu componente alvo.
Com todos estes exemplos, fica nítido que o gerenciamento de estado torna-se confuso à medida que a aplicação cresce. Por isso, utilizar uma ferramenta externa para gerenciar o estado, como o Redux , facilitará o desenvolvimento e crescimento das aplicações.
Antes de começar o dia
Hoje é um dia muito importante para sua trilha de desenvolvimento web full-stack e você precisa se empenhar para absorver cada trecho do conteúdo do dia, portanto, antes de prosseguir com o conteúdo:
1 - Acesse a URL:  https://github.com/tryber/exercises-redux-step-by-step 
Faça um fork do repositório para o seu repositório GitHub.
2 - Clique no botão "Fork" do repositório.
3 - Selecione seu usuário do GitHub.
4 - Escolha a URL remota (SSH, HTTPS) para fazer o clone do repositório.
5 - Agora é só dar um git clone na sua máquina e começar a codar.
Relembrando conceitos
Redux é uma biblioteca que pode ser utilizada com React , Angular , Vue , Ember e JavaScript puro, para dar só alguns exemplos. É muito comum o uso de Redux com React , apesar de serem ferramentas independentes .
Quando você utiliza Redux com algum UI framework ( User Interface Framework ), é comum usar alguma biblioteca para realizar a conexão ( binding ) entre o Redux e o framework . No caso do React , a biblioteca React Redux é quem faz essa conexão e pode ser instalada em sua aplicação através do comando:
npm install react-redux
React Redux é a biblioteca oficial para realizar a conexão entre React e Redux
Vamos relembrar alguns conceitos:
Store
É onde vamos armazenar todos os dados compartilhados da aplicação e é representado por um objeto JavaScript . O State é armazenado no Store do Redux.
Action
É um objeto JavaScript que representa alguma mudança/alteração que precisa acontecer no State.
Reducer
É uma função JavaScript que recebe o estado atual ( current state ) e a ação corrente ( current action ) e retorna um novo estado ( new state ). É responsabilidade dessa função decidir o que acontecerá com o estado dada uma ação( action ).
Dispatch
É uma função que envia uma ação ( action ) para processamento.
Configurando Redux com React
Agora que relembramos todos estes conceitos, podemos criar e configurar uma aplicação React que utilizará Redux.
Primeiro, criamos nossa aplicação React:
npx create-react-app my-app
Depois, instalamos as dependências:
npm install redux react-redux
redux é a biblioteca que possui a implementação do Redux ;
react-redux é a biblioteca que realiza a conexão entre o Redux e o React .
Agora, imagine que vamos implementar uma solução para salvar uma lista de itens que podem ser adicionados por quem utilizar a aplicação. Inicialmente esta lista estará vazia. A primeira coisa que precisamos fazer, ao implementar o Redux em nossa aplicação React, é criar a nossa fonte universal de estados, o Store.
store
Vamos passar pelas peças de uma configuração básica react-redux e começaremos pela store. Não se preocupe em testar os códigos nesse momento e sim em absorver como as peças funcionam em conjunto, você terá muitas oportunidades de praticar essa configuração com os exercícios do repositório que você clonou no inicio da aula de hoje .
Vamos pensar na criação de um arquivo src/store/index.js com o seguinte conteúdo:
import { createStore, combineReducers } from 'redux';
import rootReducer from '../reducers';

const store = createStore(rootReducer);

export default store;
A função createStore sempre receberá como parâmetro um rootReducer . Portanto, deve-se criar um rootReducer no arquivo src/reducers/index.js .
Dica: Para facilitar a utilização do Redux, recomendamos fortemente que você instale a extensão Redux Devtools . E adicione o pacote redux-devtools-extension com o seguinte comando: npm install --save redux-devtools-extension
Se a extensão e o pacote do Redux Devtools não estiver instalada, a linha de configuração dela apresentará um erro.
Observe o código abaixo de uma store configurada com a extensão:
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';

const store = createStore(rootReducer, composeWithDevTools());

export default store;
Observe a imagem abaixo da extensão em funcionamento:

reducer e rootReducer
Como dito anteriormente, a função createStore precisa receber como parâmetro um rootReducer , que por sua vez recebe todos os reducers da aplicação como um objeto no parâmetro da função combineReducers .
Arquivo myReducer.js dentro do diretório reducers:
const INITIAL_STATE = {
  state: '',
};

function myReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'NEW_ACTION':
      return { state: action.state };
    default:
      return state;
  }
}

export default myReducer;

Arquivo index.js dentro do diretório reducers:

import { combineReducers } from 'redux';
import myReducer from './myReducer';

const rootReducer = combineReducers({ myReducer });

export default rootReducer;

O método combineReducers que, como diz seu nome, combina reducers , deve receber um objeto com os reducers criados. Sem ele, só poderíamos usar um reducer em nossa aplicação.
Dica: Mesmo que tenhamos apenas um reducer é uma boa prática que utilizemos o combineReducers , pois caso nossa aplicação cresça e necessite de mais de um reducer não será necessário alterar sua lógica.
Vamos analisar o que está acontencedo:
Primeiro, definimos um estado inicial para nosso reducer;
Um reducer deve receber como parâmetro um estado e uma ação;
A ação, por convenção, deve ser um objeto e possuir a key type . É essa key que define como o reducer vai manipular o estado.
Então combinamos os reducers dentro do arquivo contendo o rootReducer.

actions e action creators
Como dito anterioremente, nossa action , por convenção, deve ser um objeto. Esse objeto pode possuir apenas a key type ou mais outras keys, caso seja conveniente. Note que, no caso abaixo, criamos também uma key state , que guardará o valor recebido pela action.
A action possui sempre uma propriedade type única. Essa propriedade é utilizada pelo Redux para identificar a ação que será realizada, esse conceito recebe o nome de action type.
export const newAction = (state) => ({ type: 'NEW_ACTION', state });

Acabamos de falar que actions são objetos simples em javascript, então porque criamos funções?
Chamadas de action creators , essas funções apenas criam e retornam uma action. Utilizamos as action creators porque nos trazem alguns benefícios em códigos mais complexos. Imagine ter que escrever esse objeto no seu código sempre que precisar enviar uma ação para o reducer , estaríamos tendo um trabalho repetitivo desnecessário, outra vantagem é que dessa forma também padronizamos a ação, evitando possíveis erros caso ela seja utilizada várias vezes.
Provider
Para utilizarmos o estado compartilhado que o Redux provê, precisamos trabalhar o src/index.js para adicionarmos a configuração do Provider.
import React from 'react';
import ReactDOM from 'react-dom';
// o provider é o meio pelo qual disponibilizamos o store
// com os estados de toda a aplicação para todos os demais componentes
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store';

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root'),
);

Agora que você já entendeu a configuração dessas peças do react-redux, vamos assistir essa aula que mostra como integrar as peças em um outro tipo de aplicação.
Neste vídeo você viu como estruturar as peças do Redux que aprendemos no bloco anterior, só que agora utilizando o React. Caso você rode esta aplicação, ela ainda não irá funcionar, primeiro será necessário conectar todas as peças, o que veremos ainda neste bloco.
// src/actions/index.js
const addAssignment = (value) => ({ type: 'ADD_ELEMENT', value });

export default addAssignment;
// src/reducers/index.js
const INITIAL_STATE = [];

function listReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'ADD_ELEMENT':
      return [...state, action.value];
    default:
      return state;
  }
}

export default listReducer;
Aqui, é importante sempre lembrar do caso default na declaração do switch . Apesar de não ser obrigatório, ele garante que não tenhamos um erro caso o reducer receba como parâmetro uma action inexistente. Se isso acontecer, todos os case serão pulados e a função vai cair no argumento default , que simplesmente retorna o estado como ele está. Garantimos que nosso estado não será alterado se uma action com um type que não conhecemos seja disparado para a store, mantendo assim a integridade do nosso estado global.
// src/store/index.js
import { createStore, combineReducers } from 'redux';
import listReducer from '../reducers';

const rootReducer = combineReducers({ listReducer });

const store = createStore(rootReducer);

export default store;

// src/App.js
import React from 'react';

function App() {
  return (
    <span> Hello, World </span>
  );
}

export default App;

// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store = { store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

mapStateToProps
Ao implementar os componentes é preciso conectá-los ao Redux . Primeiramente é preciso importar e adicionar os componentes à página que precisará renderizar os mesmos.

import React from 'react';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';

class App extends React.Component {
  render() {
    return (
      <div>
        <FirstComponent />
        <SecondComponent />
      </div>
    );
  }
}

export default App;
Agora vamos analisar a implementação do componente FirstComponent :
import React from 'react';
import { connect } from 'react-redux';

class FirstComponent extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.myFirstState.map((element,index) => (
            <p key={ index }>{element}</p>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  myFirstState: state.myReducer.state});

export default connect(mapStateToProps, null)(FirstComponent);
OBS: O método connect()() é utilizado para conectar o componente a store do Redux. Não se preocupe, pois iremos falar mais sobre ele no próximo tópico.
Vamos analisar o que está acontecendo:
Estamos fazendo um map com os elementos presentes no array myFirstState que, por sua vez, está presente nas props . Mas como isso foi parar lá?
A função mapStateToProps , auto-descritiva, mapeia as entidades armazenadas nos estados para uma props .
No nosso caso, queremos acessar os dados providos pelo reducer myReducer , portanto basta acessar o caminho do state com o reducer desejado e nomear a prop que o receberá (no caso, chamamos de myFirstState ).
Por último, como foi dito anteriormente, utilizamos o connect para conectar o Redux ao componente. Esse método possui o seguinte formato: connect()() . Como no caso estamos fazendo apenas leitura dos dados, basta passar a função mapStateToProps no primeiro parênteses e o componente no segundo.
Acesse a branch exercise-5 para praticar a criação do mapStateToProps. Você deverá visualizar o diretório missing_mapstatetoprops, essa é a nossa aplicação react-redux que precisará da implementação do mapStateToProps . Siga o passo a passo do arquivo README.md.
connect
O método connect nos dá acesso a store do Redux. A sua estrutura se dá da seguinte forma: connect()() .
Nos primeiros parênteses, devem estar presentes os métodos nativos do Redux. No caso de utilizar somente o mapDispatchToProps , o primeiro parâmetro desses parênteses deverá ser null , já no caso de utilizar somente o mapStateToProps , que veremos logo a frente, o segundo parâmetro desses parênteses deverá ser null . Portanto, no caso de utilizar ambos mapStateToProps e mapDispatchToProps , essa é a sintaxe que o connect apresentará:
export default connect(mapStateToProps, mapDispatchToProps)(Component)
No segundo parênteses, colocamos o componente que deverá ser conectado.
Acesse a branch exercise-6 para praticar a criação do connect. Você deverá visualizar o diretório missing_connect, essa é a nossa aplicação react-redux que precisará da implementação do connect . Siga o passo a passo do arquivo README.md.
mapDispatchToProps e dispatch
Agora, vamos à implementação do componente SecondComponent.
//actions.js

export const newAction = (state) => ({ type: 'NEW_ACTION', state });
import React from 'react';
import { connect } from 'react-redux';
import { newAction } from './actions';
// Import referente a `action creator` criada para disparar a ação para a store.

class SecondComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
    // Esse estado irá armazenar o valor do input
  }

  render() {
    const { myFirstDispatch } = this.props
    return (
      <div>
        <input
          type="text"
          onChange={event => this.setState({ inputValue: event.target.value })}
        />
        <button onClick={() => this.props.myFirstDispatch(this.state.inputValue)}> /
          Executar qualquer tarefa
        </button>
    // O botão está disparando o mapDispatch e enviando o valor para a store
      </div>
    );
  }
}

// utilizando `action`:
// const mapDispatchToProps = (dispatch) => ({
  // myFirstDispatch: (state) => dispatch({ type: 'NEW_ACTION', state }),
// });

// No caso acima, vemos que o mapDispatchToProps é uma função que retorna um objeto, e sua key recebe uma callback.
// Essa callback terá um parâmetro correspondente ao estado que será enviado para a store.
// Nessa callback, chamamos a função `dispatch`, que receberá como argumento a `action`,
// que é um objeto contendo o "type" e o parametro da callback, o "state", que será o novo valor do estado.


// utilizando `action creator `:

const mapDispatchToProps = (dispatch) => ({
  myFirstDispatch: (state) => dispatch(newAction(state))});

// Podemos utilizar o mapDispatchToProps de outra forma também! Lembra do arquivo que foi criado contendo a função "newAction?
// No exemplo acima, o dispatch está recebendo como argumento a "newAction", que também é chamada de `action creator`.
// E é aí que está a vantagem de utilizar  as `action creator`, pois elas também geram uma `action`.

export default connect(null, mapDispatchToProps)(SecondComponent);


// reducers/myReducer.js

const INITIAL_STATE = {
  state: '',
};

function myReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'NEW_ACTION':
      return { state: action.state };
      // Nesse caso a utilização do spread operator (...) não é necessário, pois estamos trabalhando com uma única chave no estado.
      // Mas caso tenha dúvidas sobre a utilização, consulte a documentação do Redux https://redux.js.org/recipes/using-object-spread-operator
    default:
      return state;
  }
}

export default myReducer;


// reducers/index.js

import { combineReducers } from 'redux';
import myReducer from './myReducer';

const rootReducer = combineReducers({ myReducer });

export default rootReducer;

O dispatch é uma função da Redux store. Lembra que você precisa chamar uma store.dispatch para despachar uma ação com JavaScript puro? Então, o mapDispatchToProps tem acesso à essa função da store, e é através dela que você conseguirá enviar a ação para alterar o estado da aplicação .
Vamos passar por cada parte do componente para explicar seu funcionamento:
Primeiro, nós estamos definindo um estado interno do componente chamado inputValue . Note que, apesar de estarmos usando o Redux , que centraliza os states , caso haja algum estado o qual não necessite navegar entre outros componentes, podemos declará-lo internamente.
Estamos criando um input para o usuário digitar a tarefa que deseja executar. A cada mudança no valor do input, o valor é salvo no estado inputValue .
Um botão com a propriedade onClick foi criado, passando a função myFirstDispatch que está presente na props . Mas como isso foi parar lá? Veremos agora:
A função mapDispatchToProps é a responsável por disparar - fazer o dispatch de - uma ação para o reducer .
Para termos acesso às funcionalidades do Redux, seja a de ler os dados ou manipulá-los, precisamos acessá-las como props de um componente. Por isso, como explicitado no nome da função, o mapDispatchToProps mapeia os dispatchs para o props .
Note que no início do arquivo estamos importando a action newAction , criada anteriormente. No caso, estamos nomeando uma propriedade chamada myFirstDispatch , que faz o dispatch da action newAction com um parâmetro.
Outra observação importante é que as estruturas dos métodos mapStateToProps e mapDispatchToProps sempre serão as mesmas, o que mudará são as propriedades que vamos acessar ou actions que vamos disparar.
O mapDispatchToProps , assim como o mapStateToProps , podem ser criados via funções convencionais ou arrow functions. O que é indispensável é que o retorno seja um objeto, pois é assim que o Redux o espera.
Lembre-se: a única maneira de enviarmos uma action para um reducer é fazendo seu dispatch .
Por último, para conectar o Redux ao componente, é preciso importar o método connect .
Acesse a branch exercise-7 para praticar a criação do mapDispatchToProps e do dispatch. Você deverá visualizar o diretório missing_mapdispatchtoprops, essa é a nossa aplicação react-redux que precisará da implementação do mapDispatchToProps e do dispatch . Siga o passo a passo do arquivo README.md .
Pronto! Essa é uma aplicação com react-redux pronta com todas as suas peças funcionando. Note que a estrutura pura do Redux se baseia em: store , actions e reducers . Já a estrutura de conexão entre o React e o Redux é composta por: provider , connect , dispatch , mapDispatchToProps e mapStateToProps . Essas são as principais ferramentas que constituem a estrutura react-redux.
Agora que aprendemos como encaixar as peças, você já sabe como utilizar o Redux no React! Aproveite para observar o comportamento do estado utilizando a extensão do navegador Redux Devtools mencionada anteriormente no início deste bloco.
// src/actions/index.js
const addAssignment = (value) => ({ type: 'ADD_ELEMENT', value });

export default addAssignment;
// src/reducers/index.js
const INITIAL_STATE = [];

function listReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'ADD_ELEMENT':
      return [...state, action.value];
    default:
      return state;
  }
}

export default listReducer;
// src/store/index.js
import { createStore, combineReducers } from 'redux';
import listReducer from '../reducers';

const rootReducer = combineReducers({ listReducer });

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // A linha acima não é obrigatória, serve apenas para visualizar
  // a extensão "Redux Devtools", caso você tenha instalado.
);

export default store;
// src/InputsList.js
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import addAssignment from './actions';

class InputsList extends React.Component {
  constructor() {
    super();
    this.state = { textValue: '' };
  }

  render() {
    const { add } = this.props;
    const { textValue } = this.state;

    return (
      <div>
        <input
          type="text"
          placeholder="Digite a tarefa"
          onChange={ (event) => this.setState({ textValue: event.target.value }) }
        />
        <button type="button" onClick={ () => add(textValue) }>
          Adicionar Tarefa
        </button>
      </div>
    );
  }
}

InputsList.propTypes = {
  add: PropTypes.func.isRequired,
};

const mapDispatchtoProps = (dispatch) => ({
  add: (value) => dispatch(addAssignment(value))
});

export default connect(null, mapDispatchtoProps)(InputsList);
// src/List.js
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class List extends React.Component {
  render () {
    const { list } = this.props;

    return (
      <div>
        <div>
          {list.map((element, index) => <p key={ index }>{element}</p>)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.listReducer});

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default connect(mapStateToProps)(List);

// src/App.js
import React from 'react';
import InputsList from './InputsList';
import List from './List';

function App() {
  return (
    <div>
      <InputsList />
      <List />
    </div>
  );
}

export default App;
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store = { store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

Fluxo de dados no Redux
O gif abaixo resume todas partes e como elas se comunicam para funcionamento do Redux com React. Basicamente, segue-se os seguintes passos:
1- Um Store é criado para armazenar todos o estado da aplicação;
2- O Store é disponibilizado através do Provider para todos os componentes da aplicação;
3- Os componentes usam o connect para conectarem-se ao Store ;
4- As pessoas que utilizam a aplicação interagem com ela e disparam eventos;
5- Estes eventos têm o nome de Actions e são enviadas ao Store através de um dispatch ;
6- Os Reducers recebem essas Actions e alteram o estado da aplicação (criando um novo estado) e salvando no Store ;
7- Os componentes conectados ao Store "ouvem" estas mudanças e atualizam a View (visualização).



Checklist react-redux: Passo a passo para guardar no coração e colar na parede
npx create-react-app my-app-redux;
npm install redux react-redux;
npm install.
Criar dentro do diretório src:
diretório actions;
diretório reducers;
diretório store.
Criar dentro do diretório actions:
arquivo index.js.
Criar dentro do diretório reducers:
arquivo index.js.
Criar dentro do diretório store:
arquivo index.js.
Em src/index.js:
definir o Provider, <Provider store={ store }> , para fornecer os estados à todos os componentes encapsulados em <App /> .
Se a sua aplicação não terá outras páginas, não é necessário configurar as rotas. Caso contrário:
npm install react-router-dom@v5;
Em src/index.js:
definir o BrowserRouter, <BrowserRouter> .
No arquivo App.js:
definir o Switch, <Switch> ;
definir a Route, <Route> .
O BrowserRouter, o Switch e a Route são três componentes essenciais para trabalhar rotas em React.
Caso necessário:
criar o diretório components;
criar o diretório pages.
No arquivo store/index.js:
importar o rootReducer e criar a store;
configurar o Redux DevTools.
Na pasta reducers:
criar os reducers necessários;
configurar os exports do arquivo index.js.
Na pasta actions:
criar os actionTypes;
criar as actions necessárias.
Nos componentes:
criar a função mapStateToProps se necessário;
criar a função mapDispatchToProps se necessário;
fazer o connect se necessário.
#theend

//          24/02 – 15.3 - Usando o Redux no React – Prática

O que vamos aprender?
O Redux é uma ferramenta extremamente importante na vida de uma pessoa desenvolvedora front-end. Praticar é a melhor forma de aprender Redux. Hoje você irá aplicar o Redux em alguns cenários. Para praticar esses conceitos e também soft skills, trabalharemos algumas partes individualmente e outras em grupo, colocando em prática o valor de colaboração (a facilitação dará mais instruções) para que todo mundo possa compartilhar conhecimento e ganhar eficiência. A proposta é fazer o máximo possível dos exercícios, para ganhar mais familiaridade com o Redux.
Array: eu atualizo ou faço uma cópia?
Para utilizar o Redux com mais tranquilidade, devemos sempre nos lembrar de que o state é imutável . Isso significa que só podemos usar métodos que façam clonagem e não podemos usar métodos que façam mutação . Mas vá com calma, esse é um conceito um pouco mais abstrato e poderá levar um tempo para que você o domine, mas dominar esse conceito vai lhe dar muito mais segurança na hora de manipular a store .
No JavaScript há vários métodos para trabalhar com arrays. Podemos dividí-los entre os métodos que, ao realizar a sua função, não criam um novo array, ou seja, causam mutação no array já existente, e os que criam um novo array, sem alterar o array antigo, ou seja, fazem clonagem .
Sabendo disso, e tendo a regra nítida de que a Store deve ser imutável, só podemos trabalhar com métodos que façam clonagem e nunca com os métodos que fazem mutação . Em resumo, a mutação atualiza um valor já existente na memória e a clonagem cria um novo valor separado, mantendo o antigo intacto.
Agora, vamos a um exemplo prático do que é mutação:
const itemPrimario = [1, 2, 3, 4, 5];
let mutacaoTeste = itemPrimario;
mutacaoTeste.push(6);
console.log(mutacaoTeste); // [1, 2, 3, 4, 5, 6]
console.log(itemPrimario); // [1, 2, 3, 4, 5, 6]
A) Ao passar o valor da const itemPrimario para a const mutacaoTeste , você está apenas dando a variável mutacaoTeste o apontador para o local em memória onde o valor de itemPrimario está localizado. Logo, você tem o mesmo valor apontado pelas duas variáveis.
B)Ao utilizar o push para colocar o valor 6, como o método não faz clonagem , e sim mutação , ele alterou diretamente o local em memória que o valor estava guardado e, por isso, o valor das duas variáveis foi alterado. Isso não é permitido no Redux .
C)Exatamente pelo fato do endereço em memória ser alterado diretamente, não tivemos a necessidade de passar o valor para a variável mutacaoTeste novamente, já que o endereço em memória permanece o mesmo.
Agora um exemplo de cópia, num primeiro momento essa resposta parece errada, então rode esse código linha a linha e veja o que acontece:
const itemPrimario = [1, 2, 3, 4, 5];
let clonagemTeste = itemPrimario;
clonagemTeste.concat(6);
console.log(clonagemTeste); // [1, 2, 3, 4, 5]
console.log(itemPrimario); // [1, 2, 3, 4, 5]
a) Aqui estamos utilizando o método concat porque esse método faz clonagem . Isto é, ele cria um novo array com os valores atualizados MAS NÃO atualiza a variável clonagemTeste para que ela aponte para esse novo array. Logo, a variável clonagemTeste ainda aponta para o array antigo! Sem uma reatribuição, o endereço atribuído a clonagemTeste é o do valor antigo e por isso seu array não foi alterado. Ficou entendido? A mutação altera o valor para onde as duas variáveis apontam e a clonagem cria um novo valor e mantém o antigo intacto.
b)Refaça o código com a reatribuição agora, e veja que itemPrimario vai manter seu valor antigo e clonagemTeste terá o valor novo.
C)Talvez você não tenha se dado conta até agora, mas pense em todas as vezes que você precisou utilizar um push , um splice , um sort() ... Esses métodos tem algo em comum, você não precisou reatribuir a variável com o novo valor depois, não é mesmo? Isso acontece porque esses valores fazem mutação . Já métodos como o concat , o slice , um filter() ... Esses métodos todos precisam que a variável seja reatribuída, certo? Porque eles fazem clonagem e por conta disso, o novo valor deve ser atribuído, do contrário a variável ainda vai acessar o valor antigo.
d)Sempre que estiver na dúvida se pode ou não utilizar um método faça esse teste, ou pesquise sobre o método e veja se ele faz mutação ou clonagem . Para ajudar nessa tarefa, veja esse site https://doesitmutate.xyz/ que mantém uma lista dos métodos que fazem mutação e dos que não fazem.
Outra maneira de trabalharmos com imutabilidade de arrays é com um conceito visto no módulo de fundamentos: o spread operator . Usando o mesmo array dos exemplos anteriores, desta vez com spread operator , ficaria desta forma:
const itemPrimario = [1, 2, 3, 4, 5, 6];
let spreadTeste = [...itemPrimario, 7];
console.log(spreadTeste); // [1, 2, 3, 4, 5, 6, 7]
console.log(itemPrimario); // [1, 2, 3, 4, 5, 6]
Temos esse conteúdo no começo de um dia mais voltado para exercícios, porque ele é importante para evitar algumas armadilhas na hora de criar nosso state . Os próximos exercícios vão necessitar que o conceito seja bem compreendido para serem resolvidos com tranquilidade.
Mais uma vez, esse conteúdo é um pouco mais abstrato, então tenha calma caso você tenha dificuldades de entendimento, conforme você for fazendo exercícios, isso vai ficando mais nítido.
Durante o dia, pense sobre quando vale a pena utilizar o Redux, pois embora seja obrigatório para efeitos de aprendizado usar Redux em todos os exercícios de hoje, vale sempre a reflexão sobre quando é interessante utilizar e quando pode ser melhor utilizar alguma outra tecnologia para controle de estado.

Exercício:
Novamente em conjunto, tentem trocar de posição, quem pilotava, agora observa e vice-versa:
1- Você irá criar um sistema de cadastro de clientes. Esse sistema deve ser composto por 4 páginas.
A primeira página deve ser a Home . Ela deverá ter um Link que possibilite ao usuário navegar para a página de login.
A segunda página será a de Login. Devem existir 2 campos para pegar os dados do usuário (email e senha). Após o login ser efetuado, o usuário deve ser redirecionado para a página de Clientes cadastrados.
Caso o login não seja feito, ou seja, o usuário tenha mudado à mão o link do sistema e ido para a página de cadastro ou de clientes, a única mensagem exibida deve ser: "Login não efetuado".
A página de Clientes cadastrados deverá listar todos os clientes. Caso não haja cliente, a mensagem "Nenhum cliente cadastrado" deve aparecer na tela, juntamente com um botão para ir à pagina de cadastro. Esse botão deve permanecer na tela mesmo caso hajam clientes.
A página de cadastro deve conter 3 inputs, para pegar 3 dados do cliente: nome, idade e email. Um botão deve gerar o cadastro. Deve haver também na página um botão que leve o usuário para a página de Clientes cadastrados .
Estados que não necessitem navegar para outros componentes, podem ser guardados internamente. Todos os outros devem ser trafegados via Redux.



Solução:
Cadastro de clientes
Rodando os exercícios localmente
Para executar as aplicações localmente basta seguir os seguintes passos:
1- Crie uma aplicação create-react-app :
Copiar
npx create-react-app reddit
2- Instale react-redux , redux , react-router-dom como dependências:
Copiar
npm install react-redux redux react-router-dom@v5

// src/actions/index.js
export const addRegister = value => ({ type: 'ADD_REGISTER', data: value });
export const login = value => ({ type: 'LOGIN', value });

// src/reducers/login.js
const Initial_State = {};

function loginReducer(state = Initial_State, action) {
  switch (action.type) {
    case 'LOGIN':
      return action.value;
    default:
      return state;
  }
}

export default loginReducer;

// src/reducers/register.js
const Initial_State = [];

function registerReducer(state = Initial_State, action) {
  switch (action.type) {
    case 'ADD_REGISTER':
      return [...state, action.data];
    default:
      return state;
  }
}

export default registerReducer;

// src/reducers/index.js
import { combineReducers } from 'redux';
import loginReducer from './login';
import registerReducer from './register';

const rootReducers = combineReducers({ registerReducer, loginReducer });

export default rootReducers;

// src/store/index.js
import { createStore } from 'redux';
import rootReducer from '../reducers';

const store = createStore(rootReducer);

export default store;

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

// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        Bem-vindo ao sistema de cadastramento!
        <Link to="/Login">Faça seu Login</Link>
      </div>
    );
  }
}

export default Home;

// src/Login.js
import React from 'react';
import { connect } from 'react-redux';
import { login } from './actions';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  render() {
    const { email, password } = this.state;
    return (
      <div>
        <div>
          <input
            type="text"
            onChange={e => this.setState({ email: e.target.value })}
            placeholder="email"
          />
          <input
            type="password"
            onChange={e => this.setState({ password: e.target.value })}
            placeholder="senha"
          />
        </div>
        <Link
          to="/clients"
          onClick={() => this.props.login({ email, password })}>
          Entre
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: e => dispatch(login(e))});

export default connect(null, mapDispatchToProps)(Login);

// src/Register.js
import React from 'react';
import { connect } from 'react-redux';
import { addRegister } from './actions';
import { Link } from 'react-router-dom';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
    };
  }

  validateRegister = () => {
    const { name, age, email } = this.state;
    this.props.addRegister({ name, age, email });
    this.setState({
      name: '',
      age: '',
      email: '',
    });
  };

  render() {
    const { name, age, email } = this.state;
    const { userLogin } = this.props;
    if (!userLogin.email) return <div>Login não efetuado!</div>;
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Idade"
            value={age}
            onChange={e => this.setState({ age: e.target.value })}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
          />
        </div>
        <button onClick={this.validateRegister}>Registrar Cliente</button>
        <Link to="/clients">Ver clientes cadastrados</Link>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  userLogin: state.loginReducer});
const mapDispatchToProps = dispatch => ({
  addRegister: e => dispatch(addRegister(e))});

export default connect(mapStateToProps, mapDispatchToProps)(Register);

// src/Clients.js
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Clients extends React.Component {
  render() {
    const { registers, userLogin } = this.props;
    if (!userLogin.email) return <div>Login não efetuado!</div>;
    if (registers.length < 1)
      return (
        <div>
          <div>Nenhum cliente cadastrado</div>
          <Link to="/register">Cadastre agora!</Link>
        </div>
      );
    return (
      <div>
        <Link to="/register">Cadastre outros!</Link>
        <div>
          {registers.map((register, index) => {
            return (
              <div key={register.email}>
                <p>ID de registro: {index + 1}</p>
                <p>Nome: {register.name}</p>
                <p>Idade: {register.age}</p>
                <p>Email: {register.email}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  registers: state.registerReducer,
  userLogin: state.loginReducer});

export default connect(mapStateToProps)(Clients);

Bônus
Você irá implementar funcionalidades ao código do exercício 1.
Na página de clientes cadastrados, crie um botão que ordene os clientes em ordem alfabética a partir do campo nome . Caso o botão seja clicado novamente, a ordenação original deve ser mostrada.
Cada cadastro deve ser acompanhado de um botão com o texto X . Caso o botão seja clicado, o cadastro deve ser excluído.
Apenas os arquivos modificados em relação a resolução anterior serão apresentados
Solução:
// src/Clients.js
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteRegister } from './actions';

class Clients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ordened: false,
    };
  }

  generateRegisters = array =>
    array.map(register => (
      <div key={register.email}>
        <p>Nome: {register.name}</p>
        <p>Idade: {register.age}</p>
        <p>Email: {register.email}</p>
        <button onClick={() => this.props.delete(register)}>X</button>
      </div>
    ));

  orderRegisters = () => {
    const ordened = [...this.props.registers];
    ordened.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    });
    return ordened;
  };
  render() {
    const { registers, userLogin } = this.props;
    const { ordened } = this.state;

    if (!userLogin.email) return <div>Login não efetuado!</div>;
    if (registers.length < 1)
      return (
        <div>
          <div>Nenhum cliente cadastrado</div>
          <Link to="/register">Cadastre agora!</Link>
        </div>
      );
    return (
      <div>
        <Link to="/register">Cadastre outros!</Link>
        <button
          onClick={() => this.setState(state => ({ ordened: !state.ordened }))}>
          Ordenar
        </button>
        <div>
          {this.generateRegisters(ordened ? this.orderRegisters() : registers)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  registers: state.registerReducer,
  userLogin: state.loginReducer});

const mapDispatchToProps = dispatch => ({
  delete: e => dispatch(deleteRegister(e))});

export default connect(mapStateToProps, mapDispatchToProps)(Clients);

// src/actions/index.js
export const addRegister = value => ({ type: 'ADD_REGISTER', data: value });
export const deleteRegister = value => ({ type: 'DELETE_REGISTER', value });
export const login = value => ({ type: 'LOGIN', value });

// src/reducers/register.js
const Initial_State = [];

function registerReducer(state = Initial_State, action) {
  switch (action.type) {
    case 'ADD_REGISTER':
      return [...state, action.data];
    case 'DELETE_REGISTER':
      return state.filter(register => register !== action.value);
    default:
      return state;
  }
}

export default registerReducer;
*/