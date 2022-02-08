import React, {Component} from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    console.log("construtor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", this.state, nextState);
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", this.state, prevState);
  }

  render() {
    console.log("render");
    return (
      <div>
        <p>Contador</p>
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}
        >
          Soma
        </button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default Counter;

/*

//  O Ciclo de Vida de um componente React

Como visto no vídeo anterior, existem funções específicas que são executadas ao final de cada fase do ciclo de vida de um componente: componentDidMount , componentDidUpdate e componentWillUnmount . Porém o vídeo também menciona que existem outras funções consideradas menos comuns, como é caso de shouldComponentUpdate , que pode ser chamada na fase de atualização.
Os componentes React , assim como os seres vivos, possuem um ciclo de vida. No caso do React, o ciclo é dividido em 3 etapas. São elas:
a) Montagem - quando o componente é inicializado e inserido no DOM;
b) Atualização - quando os props ou estados do componente são alterados;
c) Desmontagem - quando o componente morre 🧟‍♂️, sumindo do DOM.
O ciclo de vida é acessível por meio de métodos nativos dos class components . Como exemplo, pense no render , que é um método de renderização dos class components e que é chamado toda vez que uma atualização acontece. Ele possui características intrínsecas que permitem adicionar o componente no DOM. Assim como o render , outros métodos possuem suas próprias características e objetivos. O ciclo de vida e os principais métodos funcionam da seguinte maneira:
Montagem:
a) constructor - recebe as props e define o estado;
b) render - renderiza o componente, inserindo-o no DOM;
c) componentDidMount - dispara uma ou mais ações após o componente ser inserido no DOM (ideal para requisições) ;
Atualização:
a) shouldComponentUpdate - possibilita autorizar ou não o componente a atualizar;
b) componentDidUpdate - dispara uma ou mais ações após o componente ser atualizado;
Desmontagem:
a) componentWillUnmount - dispara uma ou mais ações antes de o componente ser desmontado.
Além dos métodos citados, há também outros que o próprio React intitula de Métodos Raramente Usados , como o getDerivedStateFromProps e getSnapshotBeforeUpdate.

// Entendendo quando cada método é chamado
Vamos agora fazer uma simulação, para ver na prática quando cada método é chamado, componente acima.
Ao executar o código acima, sem o clique no botão Soma , aparecerão as seguintes mensagens no console do seu browser:
constructor
render 
componentDidMount

Atente-se para a ordem de chamada dos métodos. As mensagens refletem a ordem de execução dos métodos de ciclo de vida do componente.
Os métodos shouldComponentUpdate e componentDidUpdate não apareceram no console, pois não houve atualização. Caso o botão Soma seja clicado, teremos mais mensagens no console:
constructor
render 
componentDidMount
shouldComponentUpdate
render
componentDidUpdate
Note que, durante o processo de atualização, o método render é chamado novamente. Isso acontece porque, quando se atualiza uma props ou estado, o React "pede" que o componente seja renderizado no DOM. Como apresentamos acima, caso seja válido, podemos impedir essa renderização retornando false com o método shouldComponentUpdate .
Podemos também, nos métodos shouldComponentUpdate e componentDidUpdate , acessar os estados ou props próximos e anteriores. Para isso, devemos utilizar os parâmetros nextProps e nextState no shouldComponentUpdate e prevProps e prevState no componentDidUpdate . Veja um exemplo:
Antes, vamos alterar os console.log() dos métodos citados acima:
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", this.state, nextState);
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", this.state, prevState);
  }
constructor
render 
componentDidMount
shouldComponentUpdate {counter:0} {counter:1}
render
componentDidUpdate {counter:1} {counter:0}
Perceba que o estado só é de fato atualizado quando chega no método componentDidUpdate . Por isso, caso seja necessário impedir uma renderização, você deve utilizar o método shouldComponentUpdate , que permite comparar os atuais e próximos estados ou props e adicionar a lógica.
*/


