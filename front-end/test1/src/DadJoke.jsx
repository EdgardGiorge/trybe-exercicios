import React, {Component} from "react"

class DadJoke extends Component {
  constructor() {
    super();
    /*bind das funções que nós criamos*/  
    this.saveJoke = this.saveJoke.bind(this);
    this.renderJokeElement = this.renderJokeElement.bind(this);

    this.state = { // define o estado inicial da...
      jokeObj: undefined, // piada mais recente retornada pela api
      loading: true, // loading
      storedJokes: [], // array de piadas
    }
  }

  async fetchJoke() { // 1) requisição da api pra inserir no estado
    this.setState(
      { loading: true }, // 6.1) Primeiro parâmetro da setState() é loading true!, informo la na renderização condicional que ele está true dai ele imprime 'Loading'
      async () => { // 6.2) Segundo parâmetro é o fetch (depois de carregar eu executo a sequência do fetch )
      const requestHeaders = { headers: { Accept: 'application/json' } } // 1.2)chaves headers e accept pra recuperar o json (ver documentação da api)
      const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders) // 1.1)url pra recuperar o json. O fetch vai retornar a promisse
      const requestObject = await requestReturn.json(); // 1.3)roda a função json que também é uma promisse que retorna um objeto Java script com o retorno da requisição
      this.setState({
        loading: false, // 6.3) mudo o estado pra false e faz a renderização junto com a parte 6).
        jokeObj: requestObject // 1.4) recebe este objeto de pidas do fetch e coloca no estado
      });
    });
  }

  componentDidMount() { // 2) durante a fase de montagem a piada aparece no começo da aplicação, pra isso, chama-se a lógica do fetch dentro do componentDidMount(ideal pra fazer requisições de api) 
    this.fetchJoke(); 
  }

  saveJoke() { // 5) pegar a piada atual e salvar no meu array de piadas
    this.setState(({ storedJokes, jokeObj }) => ({ // 5.1) call back que recebe como primeiro parâmetro o meu estado anterior, e o segundo o estado atual 
      storedJokes: [...storedJokes, jokeObj] // 5.2) spread operator que 'espalha/junta' dois arrays em um só, isso dispara uma nova renderização do componente  
    }));

    this.fetchJoke();
  }

  renderJokeElement() {
    return (
      <div>
        <p>{this.state.jokeObj.joke}</p> {/* 3)renderiza a piada mais recente que esta no meu estado*/}
        <button type="button" onClick={this.saveJoke}>
          Salvar piada!
        </button>{/* 4)renderiza o botão que vai fazer a piada ser salva na minha lista.*/}
      </div>
    );
  }

  render() {
    const { storedJokes, loading } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span> {/* 5.3) função que vai iterar sobre as piadas que estão salvas dentro do array de piadas (que vem do estado, eu pego o objeto de piadas que contém o id e a piada que nesta api vem da chave joke). o map faz uma lista dinâmica de piadas baseada no array, com o conteúdo é a piada{joke}, e a chave(pra facilitar a vida do react na hora de renderizar as coisas de forma eficiente vai ser o id, com isso a lista de piadas esta pronta */}

      <p>{loading ? loadingElement : this.renderJokeElement() }</p> {/* 6) Renderização condicional: o primeiro render(na ordem de montagem) o jakeObj é undefined, esta condição pergunta... estou carregando o novo estado, enquanto isso manda a msg de carregando... se o loading é true, ele renderiza a msg 'Loading', caso contrário, ele renderiza a função que traz a piada e salva*/}

      </div>
    );
  }
}

export default DadJoke;

/* Esta aplicação deve trazer uma piada logo no carregamento da tela, que deve ser salva em uma lista quando aperto o botão salvar, apertando este botão, também deve mostrar na tela a próxima piada, antes de cada atualização/piada, deve-se mostrar a msg Loading na tela Sequencia da lógica: 1, 1.1, 1.2, 1.3, 1.4, 2, 3, 4, 5, 5.1, 5.2, 5.3, 6, 6.1, 6.2, 6.3,  

/* 
// Renderização condicional e atualização de arrays no estado

Estamos realizando uma requisição para uma API, e enquanto esperamos o resultado retornar, criamos uma lógica de renderização condicional.
Vimos no vídeo como fazemos para garantir que algo só rode depois do estado ser atualizado! Passamos como segundo parâmetro da this.setState uma callback com a dita lógica!
this.setState({ meuEstado: novoValor }, () => {
  // ... Sua lógica aqui
})
E para o caso mais complicado? Isto é, atualizar o estado baseado no estado anterior e executar alguma lógica somente depois do estado atualizar ao mesmo tempo?! Nesse caso tanto o primeiro parâmetro quanto o segundo são callbacks!
this.setState(
  (estadoAnterior) => ({ meuEstado: estadoAnterior }), // Primeiro parâmetro!
  () => { ... Sua lógica aqui } // Segundo parâmetro!
  )
  sintaxe é um tanto confusa, mas guarde isso na sua caixa de ferramentas para fazer lógicas de Loading... quando se está esperando a resposta de uma API! E lembre-se: como a this.setState não retorna uma promise, usar async/await com ela NUNCA vai funcionar.
  💡 Aprendemos no vídeo também sobre como atualizar arrays no estado com base no estado anterior! Use o spread operator! this.setState(({ meuArrayNoEstado }) => ({meuArrayNoEstado: [...meuArrayNoEstado, novoElemento] }))
*/    