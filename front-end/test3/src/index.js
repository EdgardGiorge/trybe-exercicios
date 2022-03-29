import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/* 
25/02 15.4 - React com Redux - parte 2 ( Usando o Redux no React - Actions Assíncronas)

O que vamos aprender?
Vamos recapitular o que você aprendeu até então:
a) Você aprendeu a fazer uso de Redux para prover gerenciamento de estado à sua aplicação;
b) Você viu como o fluxo de dados funciona em uma aplicação que usa Redux se baseia em 3 entidades fundamentais:
1- store : a única fonte da verdade referente ao estado compartilhado da sua aplicação . Ou seja, é na store e somente lá que se encontram os dados compartilhados da sua aplicação.
2- actions : ordens enviadas para a store que, por sua vez, interpreta as alterações que devem ocorrer através do reducer . No Redux , ainda existem as action creators , funções que criam as actions utilizadas na aplicação. Uma boa prática é inserir todas as action creators dentro de uma única pasta, separada dos demais arquivos.
3- reducer : uma função pura que tem como responsabilidade gerenciar o estado da store de acordo com a action recebida. Ou seja, ele provê um novo estado para a store , com as devidas alterações relacionadas a action que lhe foi entregue. É possível combinar vários reducers A , B , ..., N em um reducer X só, de forma que somente X seja enviado para criar a store . Assim como as actions , é uma boa prática inserir todos os seus reducers em uma pasta própria.

c) Por fim, você viu como integrar Redux com React , haja visto que Redux não é exclusivo para aplicações React . Tal integração é feita via o pacote react-redux , permitindo que componentes React consigam acessar a store e enviar actions para ela.
Foquemos agora no fluxo de dados de uma aplicação Redux : "out of the box", o Redux suporta somente o fluxo síncrono de dados, e isso consegue ser percebido ao olhar para actions : uma action é um objeto JavaScript que descreve algum evento que já aconteceu e esse objeto é enviado para a store para que seu estado seja atualizado.
Mas, e se fosse preciso ter uma action assíncrona, que precisa fazer uma requisição para uma API , de forma que os devidos dados necessários estejam presentes para gerar a action ? De antemão não teríamos tais dados para formar essa action , esse objeto, haja visto que é preciso esperar pela requisição ser concluída. Logo, como se cria actions assíncronas? É isso que você aprenderá na aula de hoje.

Você será capaz de:
Criar actions assíncronas na sua aplicação React que faz uso de Redux.

Por que isso é importante?
Na sua carreira de desenvolvimento operações assíncronas serão extremamente recorrentes. Agora que você está usando Redux , vai ser comum você precisar salvar na store algum dado que veio de forma assíncrona (um endpoint que retorna informações do usuário logado, para que esteja disponível para sua aplicação, por exemplo).
Tal necessidade, por si só, não é sanada pelo pacote Redux , haja visto que ele suporta somente fluxo síncrono de dados. Isso faz com que seja necessário fazer uso de outros pacotes, entre eles o mais popular: redux-thunk . Tal pacote provê uma interface simples para dar suporte a action creators que geram actions assíncronas, e é ele que você aprenderá para tornar sua aplicação mais completa.

Redux-thunk

A solução padrão recomendada na documentação do Redux para se ter actions assíncronas é via uso do pacote redux-thunk. Fun-fact: a lógica desse pacote se encontra em um arquivo .ts com um pouco mais de 50 linhas de código, e é usado por mais de um milhão de repositórios. Olha o que aproximadamente 50 linhas de código conseguiram prover para a comunidade. Que sirva de inspiração para todos nós! 🙂

Vamos reforçar, a seguir, os conceitos pricipais do redux-thunk :
1- redux-thunk é um middleware que, no contexto de uma aplicação Redux , nada mais é que um interceptador que captura todas as actions enviadas pela store antes delas chegarem a um reducer . Ou seja, fazendo analogia com pedido online de produto, se a action fosse o produto que você comprou em algum site, e o reducer fosse você, o middleware seria o correio, que intercepta o produto antes de chegar até você para garantir que ele chegue como se deve. Depois, se quiser ler mais sobre middlewares , acesse o Redux - Middleware na sessão de recursos adicionais.

2- Para fazer uso do redux-thunk , é preciso instalá-lo via npm :
npm install redux-thunk

3- Para habilitar o uso dele na sua aplicação, é preciso fazer uso da função applyMiddleware() do Redux :

// arquivo onde a redux store é criada
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '/path/to/your/root/reducer';

...

const store = createStore(reducer, applyMiddleware(thunk));
…

Dica: Para usar o redux-thunk junto com o Redux Devtools é preciso passar o applyMiddleware(thunk) como parâmetro para a função composeWithDevTools , como no exemplo a seguir:

// arquivo onde a redux store é criada
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '/path/to/your/root/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

...

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
…

4- thunk nada mais é do que uma função que encapsula uma operação para que ela seja feita posteriormente. Em termos práticos, isso significa que você está definindo uma função que vai ser retornada por uma outra função com mais lógica adicionada a ela. Se tiver curiosidade sobre o que é um "thunk", de forma geral, leia What the heck is a 'thunk'?, por Dave Ceddia na sessão de recursos adicionais.

5- Com redux-thunk , você consegue definir uma action creator que retorna uma função (que será invocada pelo redux-thunk ) em vez de retornar somente um objeto (o que você tem feito até a aula de hoje) . Na função retornada você pode realizar uma operação assíncrona, como fazer chamadas de API e, uma vez finalizada a operação, você consegue enviar uma action com os dados obtidos por ela, da mesma forma que tem feito até então. Note a conveniência que isso traz: toda essa lógica de lidar com operações assíncronas está encapsulada na sua respectiva action assíncrona, deixando transparente para quem for fazer uso dela, que para o seu caso seriam os componentes React ! Sob a perspectiva do componente, ele estaria consumindo uma action como uma outra qualquer!

6- Para ser devidamente usada pelo redux-thunk a action creator precisa retornar uma função, que pode fazer uso de dispatch e getState da store como parâmetros. Segue um exemplo de uma action creator definida em conformidade com tal contrato:

export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';

// action creator que retorna um objeto, que você tem feito até então
const requestMovies = () => ({
  type: REQUEST_MOVIES});

// outro action creator que retorna um objeto, que você tem feito até então
const receiveMovies = (movies) => ({
  type: RECEIVE_MOVIES,
  movies});

// action creator que retorna uma função, possível por conta do pacote redux-thunk
export function fetchMovies() {
  return (dispatch) => { // thunk declarado
    dispatch(requestMovies());
    return fetch('alguma-api-qualquer.com')
      .then((response) => response.json())
      .then((movies) => dispatch(receiveMovies(movies)));
  };
}

// componente onde você usaria a action creator fetchMovies assíncrona como uma outra qualquer
...
class MyConectedAppToRedux extends Component {
  ...
  componentDidMount() {
    const { dispatch, fetchMovies } = this.props;
    dispatch(fetchMovies()); // enviando a action fetchMovies
  }
  ...
}
…

OBS : é possível passar também um terceiro argumento para a função retornada. Para ver como fazer isso, leia esta seção do repositório do redux-thunk .
Em síntese, um thunk nada mais é do que uma action que, quando despachada, faz uma requisição assíncrona e aguarda o resultado da requisição, podendo disparar uma ação em caso de sucesso (tratando as informações recebidas) ou disparando outra ação em caso de falha para buscar a informação.





Exemplos guiados

Agora que já temos uma ideia de como o thunk funciona, vamos ver um exemplo que mostra o que ele faz na prática. Para isso, vamos montar um app. Primeiro, vamos começar um novo app em React. Crie um diretório e use o comando:

npx create-react-app doguinhos-app

Depois de terminar, vamos acessar o diretório do nosso novo app e instalar as dependências necessárias:

cd doguinhos-app
npm i redux react-redux

Dê uma olhada no código da aplicação e gaste um tempo entendendo o que está sendo feito aqui. Exceto a parte do thunk (que não está completa), você tem conhecimento sobre tudo.
Vamos começar pelo arquivo index.js , onde conectamos o Provider aos componentes do nosso App.

// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root'),
);

Também temos que verificar o arquivo do componente. Como esse nosso App vai apenas fazer uma requisição externa (um fetch ), só teremos um componente, o App.js . Nós estamos utilizando o mapStateToProps para trazer o resultado do fetch e o valor da variável isFetching , que está na store, e o mapDispatchToProps para que se envie a action ao clicar no botão.

// src/App.js
import React from 'react';
import { connect } from 'react-redux';
import { fetchDog } from './store';

function App({ isFetching, src, fetchDog }) {
  return (
    isFetching ? <p>Loading</p>
      : (
        <div style={{ width: 500 }}>
          <button
            style={{ display: 'block' }}
            onClick={fetchDog}
            type="button"
          >
            Novo Doguinho
          </button>
          <img style={{ width: '100%' }} src={src} alt="dog" />
        </div>
      )
  );
}

const mapStateToProps = (state) => ({
  src: state.imagePath,
  isFetching: state.isFetching});

const mapDispatchToProps = (dispatch) => ({
  fetchDog: () => dispatch(fetchDog())});

export default connect(mapStateToProps, mapDispatchToProps)(App);

Por último, vamos copiar o arquivo que contém nossa store, action e reducer. Para fins didáticos estamos com tudo no mesmo arquivo, mas as boas práticas pedem que deixemos cada parte em um arquivo separado, tanto para manter o código mais fácil de ser lido, quanto para fazer da manutenção menos complexa.

// src/store/index.js
import { createStore } from 'redux';

const GET_IMAGE = 'GET_IMAGE';
const REQUEST_IMAGE = 'REQUEST_IMAGE';
const FAILED_REQUEST = 'FAILED_REQUEST';

function getImage(json) {
  return { type: GET_IMAGE, payload: json.message };
}

function requestDog() {
  return { type: REQUEST_IMAGE };
}

function failedRequest(error) {
  return { type: FAILED_REQUEST, payload: error };
}

export function fetchDog() {
  return (dispatch) => {
    dispatch(requestDog());
    return fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(json => dispatch(getImage(json)))
      .catch(error => dispatch(failedRequest(error)))
  };
}

const initialState = {
  isFetching: false,
  imagePath: '',
  error: '',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_IMAGE:
      return { ...state, isFetching: true };
    case GET_IMAGE:
      return { ...state, imagePath: action.payload, isFetching: false };
    case FAILED_REQUEST:
      return { ...state, error: action.payload, isFetching: false };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;

Agora, rode o npm start e depois disso clique no botão Novo Doguinho . Você irá se deparar com o seguinte erro: 
Error: Actions must be plain objects. Use custom middleware for async actions. (Dalta do redux-rhunk

Esse erro, Actions must be plain objects mostra algo que já nos foi ensinado anteriormente: actions precisam ser objetos puros, ou seja, não podem ser funções. Para usar actions que são funções nós precisamos de um middleware especial, e é aí onde se encaixa o thunk na arquitetura Redux .
Então podemos entender que o que aquele código de 14 linhas faz: ele nos permite usar funções (incluindo funções assíncronas) como actions.
Para vermos o app rodando corretamente, vamos instalar o pacote e alterar nosso código para utilizar o thunk corretamente.

npm i redux-thunk

Após a instalação, devemos inserir o thunk em nossa aplicação. O código abaixo está com as linhas não-alteradas comentadas, perceba que para utilizar o thunk é preciso acrescentar poucas linhas.

// src/store/index.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// const GET_IMAGE = 'GET_IMAGE';
// const REQUEST_IMAGE = 'REQUEST_IMAGE';
// const FAILED_REQUEST = 'FAILED_REQUEST';

// function getImage(json) {
//   return { type: GET_IMAGE, payload: json.message };
// }

// function requestDog() {
//   return { type: REQUEST_IMAGE };
// }

// function failedRequest(error) {
//   return { type: FAILED_REQUEST, payload: error };
// }

// export function fetchDog() {
//   return (dispatch) => {
//     dispatch(requestDog());
//     return fetch('https://dog.ceo/api/breeds/image/random')
//      .then(response => response.json())
//      .then(json => dispatch(getImage(json)))
//      .catch(error => dispatch(failedRequest(error)))
//   };
// }

// const initialState = {
//   isFetching: false,
//   imagePath: '',
//   error: '',
// };

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case REQUEST_IMAGE:
//       return { ...state, isFetching: true };
//     case GET_IMAGE:
//       return { ...state, imagePath: action.payload, isFetching: false };
//     case FAILED_REQUEST:
//       return { ...state, error: action.payload, isFetching: false };
//     default:
//       return state;
//   }
// }

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

// export default store;

                    03/03 - 15.5 - Testando com redux

Testando Redux

Quando conectamos o Redux ao React, algumas alterações são necessárias pra que a aplicação funcione. Um exemplo é o Provider . Como já visto, é ele quem provê o acesso ao estado de um reducer para os componentes.
Quando fazemos testes em React , o primeiro passo é renderizar um componente no ambiente simulado dos testes. Geralmente esse componente é o App.js . Por causa do necessário uso do Provider em aplicações react-redux, no momento dos testes também temos que utilizar o Provider , ou ficaremos sem o acesso ao state .
Você se lembra da função renderWithRouter utilizada para renderizar componentes que trafegam entre rotas? Para o Redux, temos uma função parecida, chamada renderWithRedux:

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

A função renderWithRedux recebe um componente como primeiro parâmetro e desconstrói um objeto como o segundo. Ele obtém o valor de uma chave initialState desse objeto e o armazena em uma variável com o mesmo nome. Além disso, ele atribui um valor padrão para a chave store , e esse valor é uma nova store criada com um reducer importado e o initialState que você acabou de desconstruir. Leia esta função com calma para ter certeza que você entendeu.
Então, isso basicamente renderiza o componente envolvido pela store que você criou para o contexto do seu teste. Ela também retorna a própria store , caso você precise acessá-la diretamente em seu teste. Em resumo: a função renderWithRedux acrescenta ao seu componente renderizado um store criado para os testes. Veremos como fazer isso mais a frente!
Vamos utilizar de exemplo um contador de cliques para criar os testes, rode os comandos e faça as alterações necessárias nos arquivos descritos.
Crie o contador a partir de npx create-react-app e após instale o redux e o react-redux com o comando npm install redux react-redux . Agora crie e/ou altere os arquivos abaixo:

// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ButtonClicks from './ButtonClicks';
import NumberClicks from './NumberClicks';
class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <ButtonClicks />
          <NumberClicks />
        </Provider>
      </div>
    );
  }
}
export default App;


// src/ButtonClicks.js
import React from 'react';
import { connect } from 'react-redux';
import addClick from './actions';
class ButtonClicks extends React.Component {
  render () {
    return (
      <div>
        <button onClick={this.props.add}>Clique aqui</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  add: () => dispatch(addClick())});
export default connect(null, mapDispatchToProps)(ButtonClicks);


// src/NumberClicks
import React from 'react';
import { connect } from 'react-redux';
class NumberClicks extends React.Component {
  render() {
    return <div>{this.props.counter}</div>;
  }
}

const mapStateToProps = state => ({
  counter: state.clickReducer.counter});

export default connect(mapStateToProps)(NumberClicks);


// src/store/index.js
import { createStore, combineReducers } from 'redux';
import clickReducer from '../reducers';
const rootReducer = combineReducers({ clickReducer });

const store = createStore(rootReducer);

export default store;


// src/reducers/index.js
const Initial_State = {
  counter: 0,
};
function clickReducer(state = Initial_State, action) {
  switch (action.type) {
    case 'ADD_CLICK':
      return { counter: state.counter + 1 };
    default:
      return state;
  }
}
export default clickReducer;


// src/actions/index.js
const addClick = () => ({ type: 'ADD_CLICK' });

export default addClick;


Teste a aplicação utilizando o npm start , se tudo estiver funcionando corretamente, você ja pode seguir e começar a criar os testes abaixo.
Para utilizar a função renderWithRedux em nossos testes, é necessário também fazer alguns imports:

import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup } from '@testing-library/react';
import App from './App';

Esses imports servem para termos acesso às ferramentas necessárias pra mockar o store.
Um detalhe muito importante: como é utilizado um combineReducers na resolução do exercício, quando formos implementar os testes, temos que criar o store mockado com a mesma estrutura do padrão. Portanto, vamos importar o combineReducers e adaptar a função renderWithRedux para utilizá-lo.

// demais imports...
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

Outro detalhe que pode ser notado é que, no caso, nosso reducer se chama clickReducer , por isso temos que importá-lo e usá-lo com o nome correto.
Por último, mais uma mudança é necessária. Você aprendeu a utilizar o Redux colocando o Provider no arquivo App.js mas, para que os testes funcionem, é necessário que movamos o Provider para o index.js . Afinal de contas, nós precisamos ignorar o store provido na aplicação em favor do store que nossos testes proveem (e que podemos controlar!). Repare, portanto, que se renderizamos o componente <App /> nos testes nós não renderizamos o store da aplicação, que está fora desse componente. Assim ficamos livres para criar um novo store que podemos controlar no ambiente de testes!

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

// Store provido pela nossa aplicação. Nos testes, precisamos prover um novo store para podermos controlá-lo

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

Pronto! Adaptações feitas, vamos para os testes!
Como primeiro teste, vamos averiguar se o botão Clique aqui e o texto "0" estão na tela.

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });
});

Bastou usar a função renderWithRedux no lugar do render, que os testes ocorreram perfeitamente. Note que não passamos valor inicial algum para o clickReducer e por isso ele utilizou o valor padrão 0, definido no código da aplicação.
Caso seja interessante alterar o valor inicial do clickReducer , isso também é possível passando como segundo parâmetro para a função renderWithRedux um objeto com as propriedades que respeitem o formato original do state . Isto é:

const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});

Observe: o objeto initialState representa o valor inicial do state . O clickReducer representa o reducer criado. O counter representa a propriedade que criamos dentro do nosso reducer . Vamos testar essa alteração no estado inicial:

  test('a click in a button should increment the value of clicks', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});

    expect(queryByText('5')).toBeInTheDocument();
  });


Testes assíncronos
No vídeo abaixo, vamos rever tudo que aprendemos hoje com um outro exemplo: uma aplicação que faz requisições a uma API!
Recapitulando o código que vimos, temos:

// src/helper/index.js
import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../../reducers';

const createMockStore = (initialState) => (
  createStore(combineReducers({ reducer }), initialState, applyMiddleware(thunk))
);

const renderWithRedux = (
  component, { initialState, store = createMockStore(initialState) } = {},
) => ({
  ...render(<Provider store={ store }>{component}</Provider>),
  store});

export default renderWithRedux;

Aqui definimos o nosso renderWithRedux como acima, acrescentando ao mesmo o thunk para permitirmos o teste de funções assíncronas.

// src/App.test.js
import { fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import fetchMock from 'fetch-mock-jest';
import App from '../App';
import renderWithRedux from './helpers';

describe('Página principal', () => {
  test('Testa que o botão de adicionar cachorro está presente', async () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonDoguinho = queryByText('Novo Doguinho');

    expect(buttonDoguinho).toBeInTheDocument();

    fetchMock.getOnce('https://dog.ceo/api/breeds/image/random', {
      body: { message: 'myDogUrl' },
    });

    fireEvent.click(buttonDoguinho);
    await waitFor(() => expect(fetchMock.called()).toBeTruthy());
  });
});

Aqui nós usamos a biblioteca fetch-mock-jest ( https://www.npmjs.com/package/fetch-mock-jest ) para facilitar a nossa execução de testes assíncronos! É perfeitamente possível fazer os testes sem ela também, mas fica como sugestão para experimentarem!
*/

