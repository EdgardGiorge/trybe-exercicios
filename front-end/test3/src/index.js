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
*/

