import React, { Component } from "react";


class MinhaDescricao extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      numeroDeCliques: 0
    }

  }
  
  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
    console.log(this)
    console.log('Clicou e usou o constructor')    
  }
  render() {
    return(
      <div className="App">
      <h1>Giorge</h1>
      <p>Sou Giorge, 43 anos, sou formado em Administração e  Eletrônica. No aspecto social, gosto de quase todos os tipos de música, jogo game, pratico corrida, sou a maioria das vezes ‘caseiro’.  No aspecto profissional, atuei em várias áreas sempre me desafiando.
      Sou de São Paulo mas já morei em muitas partes do Brasil
      O mais importante pra mim é  estar em companhias e viver ao lado de pessoas agradáveis.</p>
      <button onClick={this.handleClick}>Cliques: {this.state.numeroDeCliques}</button>
      </div>

    )
  }
}

export default MinhaDescricao;

/* 

// Vinculando funções à classe com this e bind no constructor

Vinculando funções à classe com this e bind no constructor
this ,é um objeto que o react cria e entrega pra nós, dentro dele tem muitas coisas dentre eles o prop e state
constructor() , é uma método/função interna que podemos subscrevê-la , pra isso dentro dela usamos uma outra função chamada… super(). Conseguimos então, vincular(bind) ou se fazer acessar o this dentro das funções com a seguinte sintaxe:
constructor  () {
  super()
  this.<nomeDaFunção> = this.<nomeDaFunção>.bind(this)
}
 <nomeDaFunção> , a função então é escrita dentro da classe (sem precisar escrever function antes da função), antes do render() , assim se consegue renderizar a função!
 
 // Para Fixar:
 3 - Declare dentro da classe do seu componente dos exercícios de fixação acima a função que lida com o evento que antes era lidado por uma função do lado de fora da classe!
4 - Garanta acesso ao objeto this na função que você declarou.

 constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick() {
    console.log(this)
    console.log('Clicou e usou o constructor')    
  }
  render() {
    return(
      <div className="App">      
      <button onClick={this.handleClick}>Test Constructor</button>
      </div>

    )
  }
}
*/

// Unindo componentes com estados e eventos

/*
Unindo componentes com estados e eventos
estado inicial e lógica
this.state ,é um objeto que esta dentro do this. Usamos ele dentro do constructor pra definir uma chave e seu valor inicial, neste exemplo queremos que apareça no botão a quantidade de cliques
setState, é a função que funciona de forma assíncrona que irá determinar a ordem em que o estado será executado, pois o estado é assíncrono e o react enfileira todas as atualizações de estado, agrega e executa de um,a vez, não garantindo a ordem que queremos
this.setState((estadoAnterior, _props)) ,ao invés de passarmos como parâmetro o objeto do estado atualizado, passamos uma função (call back) com dois parâmetros obrigatórios… o primeiro é o estadoAnterior e o segundo a props da aplicação(deste estado). Como a props não iremos utilizar neste exemplo, colocamos um _ pra informar q n será usado
((estadoAnterior, _props) => ({
  })) , no corpo da arrow function podemos definir/ retornar direto o nosso novo estado, veja função completa abaixo:
constructor() {
  super()
  this.<nomeDaFunção> = this.<nomeDaFunção>.bind(this)
  this.state = {
    numeroDeCliques : 0
  }
}

<nomeDaFunção>() {
  this.setState((estadoAnterior, _props) => ({
    numeroDeCliques: estadoAnterior.mumeroDeCliques + 1    
  }))
}
podemos colocar agora no texto do botão o valor deste estado…(que esta dentro do reder:
<button onClick={this.<nomeDaFunção>}>{this.state.numeroDeCliques}</button>

Exemplo do componente acima: 
import React, { Component } from "react";


class MinhaDescricao extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      numeroDeCliques: 0
    }

  }
  
  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
    console.log(this)
    console.log('Clicou e usou o constructor')    
  }
  render() {
    return(
      <div className="App">     
      <button onClick={this.handleClick}>Cliques: {this.state.numeroDeCliques}</button>
      </div>

    )
  }
}

export default MinhaDescricao; 

Coteúdo Course
E muita atenção ao que foi dito acima! Você NUNCA deve atribuir valores ao estado diretamente com this.state . O estado é atualizado de forma assíncrona pelo React, para garantir performance, e o React não garante a ordem em que as atualizações ocorrerão. Se você fizer uma atribuição direta, terá problemas! Faça-o sempre através da função this.setState(meuNovoObjetoQueRepresentaOEstado) . NÃO se esqueça disso! 😃
Mas se a a atualização do estado não ocorre em ordem, vocês perguntam, "como eu atualizo meu estado com base no estado anterior? Se tudo ocorre fora de ordem, como eu sei que uma conta de novoEstado = estadoAtual + 1 não dará problemas?"
Pois bem! Lembre-se de que, com Promises, para garantir que algum código executasse somente após o retorno da Promise, que é assíncrona, você tinha que colocá-lo dentro da função .then . Aqui a lógica é da mesma natureza:
Se você quisesse chamar, no elemento, um evento passando um parâmetro, você deveria trocar a sintaxe <button onClick{this.minhaFuncao} ...> por <button onClick={() => this.minhaFuncao('meu parametro')} . Basicamente, substitua a função do evento por uma chamada à mesma feita via callback! Experimente!
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! 
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }

  render() {
    return <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
  }
}

export default App; 

// Para fixar

5- Agora você vai converter sua aplicação para uma que conta o número de cliques dado em cada botão! Primeiramente, defina um estado inicial para a contagem de cada botão.
🦜 Dica: Uma possibilidade é você definir três chaves, uma para cada botão!
    this.state = {
      clicksBtnOne: 0,
      clicksBtnTwo: 0,
      clicksBtnThree: 0,
    };

6- Agora, quando um botão for clicado, altere de forma assíncrona o estado deste botão de zero para um.
    import React from 'react';

    class App extends React.Component {
      constructor() {
        super();

        this.handleButtonOne = this.handleButtonOne.bind(this);
        this.handleButtonTwo = this.handleButtonTwo.bind(this);
        this.handleButtonThree = this.handleButtonThree.bind(this);

        this.state = {
          clicksBtnOne: 0,
          clicksBtnTwo: 0,
          clicksBtnThree: 0,
        };
      }

      handleButtonOne() {
        this.setState(() => ({
          clicksBtnOne: 1,
        }));
      }
      
      handleButtonTwo() {
        this.setState(() => ({
          clicksBtnTwo: 1,
        }));
      }
      
      handleButtonThree() {
        this.setState(() => ({
          clicksBtnThree: 1,
        }));
      }
     
       render() {
        return (
          <div>
            <button onClick={ this.handleButtonOne }>Botão 1</button>
            <button onClick={ this.handleButtonTwo }>Botão 2</button>
            <button onClick={ this.handleButtonThree }>Botão 3</button>
          </div>
        );
      }
    }

    export default App;

7- Por fim, baseie-se no estado anterior ao atual para incrementar a contagem de cliques cada vez que um botão for clicado!    
    import React from 'react';

    class App extends React.Component {
      constructor() {
        super();

        this.handleButtonOne = this.handleButtonOne.bind(this);
        this.handleButtonTwo = this.handleButtonTwo.bind(this);
        this.handleButtonThree = this.handleButtonThree.bind(this);

        this.state = {
          clicksBtnOne: 0,
          clicksBtnTwo: 0,
          clicksBtnThree: 0,
        };
      }

      handleButtonOne() {
        this.setState((prevState) => ({
          clicksBtnOne: prevState.clicksBtnOne + 1,
        }));
      }
      
      handleButtonTwo() {
        this.setState((prevState) => ({
          clicksBtnTwo: prevState.clicksBtnTwo + 1,
        }));
      }
      
      handleButtonThree() {
        // A única coisa diferente é a desconstrução.
        // Apenas um método diferente de fazer a mesma coisa
        // do que foi feito nas funções anteriores.
        this.setState(({ clicksBtnThree }) => ({
          clicksBtnThree: clicksBtnThree + 1,
        }));
      }
      
      render() {
        return (
          <div>
            <button onClick={ this.handleButtonOne }>Botão 1 | Count = {this.state.clicksBtnOne}</button>
            <button onClick={ this.handleButtonTwo }>Botão 2 | Count = {this.state.clicksBtnTwo}</button>
            <button onClick={ this.handleButtonThree }>Botão 3 | Count = {this.state.clicksBtnThree}</button>
          </div>
        );
      }
    }

    export default App;

8- Defina uma lógica que estabeleça que, quando o número de cliques no botão for par, ele deve ser verde.
  import React from 'react';

  class App extends React.Component {
    constructor() {
      super();

      this.state = {
        clicksBtnOne: 0,
        clicksBtnTwo: 0,
        clicksBtnThree: 0,
      };

      this.handleButtonOne = this.handleButtonOne.bind(this);
      this.handleButtonTwo = this.handleButtonTwo.bind(this);
      this.handleButtonThree = this.handleButtonThree.bind(this);
    }

    handleButtonOne() {
      this.setState(({ clicksBtnOne }) => ({
        clicksBtnOne: clicksBtnOne + 1,
      }));
    }
    
    handleButtonTwo() {
      this.setState(({ clicksBtnTwo }) => ({
        clicksBtnTwo: clicksBtnTwo + 1,
      }));
    }
    
    handleButtonThree() {
      this.setState(({ clicksBtnThree }) => ({
        clicksBtnThree: clicksBtnThree + 1,
      }));
    }

    // Para essa função, não precisamos utilizar o bind porque ela é utilizada
    // apenas dentro do contexto do componente App
    getButtonColor(num) {
      // Essa função contém um ternário que realiza a lógica para mudarmos
      // a cor do botão para verde quando for um número par
      return num % 2 === 0 ? 'green' : 'white';
    }

    render() {
      const { clicksBtnOne, clicksBtnTwo, clicksBtnThree } = this.state;
      return (
        <div>
          <button
            onClick={ this.handleButtonOne }
            // Para renderizarmos as cores, precisamos acrescentar a função
            // que contém a nossa lógica ao "inline style", passando o estado
            // correspondente como parâmetro
            style={{ backgroundColor: this.getButtonColor(clicksBtnOne) }}
          >
            Botão 1 | Count = { clicksBtnOne }
          </button>
          <button
            onClick={ this.handleButtonTwo }
            style={{ backgroundColor: this.getButtonColor(clicksBtnTwo) }}
          >
            Botão 2 | Count = { clicksBtnTwo }
          </button>
          <button
            onClick={ this.handleButtonThree }
            style={{ backgroundColor: this.getButtonColor(clicksBtnThree) }}
          >
            Botão 3 | Count = { clicksBtnThree }
          </button>
        </div>
      );
    }
  }

  export default App;

9- A cor atual do botão deve ser impressa num console.log() de dentro da função do evento que lida com o clique. Faça isso acontecer!
🦜 Dica: Lembre-se de substituir a referência à função, no evento, por uma callback que invoca!
  import React from 'react';

  class App extends React.Component {
    constructor() {
      super();

      this.state = {
        clicksBtnOne: 0,
        clicksBtnTwo: 0,
        clicksBtnThree: 0,
      };

      this.handleButtonOne = this.handleButtonOne.bind(this);
      this.handleButtonTwo = this.handleButtonTwo.bind(this);
      this.handleButtonThree = this.handleButtonThree.bind(this);
    }

    handleButtonOne() {
      this.setState(({ clicksBtnOne }) => ({
        clicksBtnOne: clicksBtnOne + 1,
      }), () => {
        console.log(`Botão 1 ${this.getButtonColor(this.state.clicksBtnOne)}`);
      });
    }
    
    handleButtonTwo() {
      this.setState(({ clicksBtnTwo }) => ({
        clicksBtnTwo: clicksBtnTwo + 1,
      }), () => {
        console.log(`Botão 2 ${this.getButtonColor(this.state.clicksBtnTwo)}`);
      });
    }
    
    handleButtonThree() {
      this.setState(({ clicksBtnThree }) => ({
        clicksBtnThree: clicksBtnThree + 1,
      }), () => {
        // Aqui imprimimos a cor no console após o setState atualizar
        // a quantidade de clicks no botão
        console.log(`Botão 3 ${this.getButtonColor(this.state.clicksBtnThree)}`);
      });
    }

    getButtonColor(num) {
      return num % 2 === 0 ? 'green' : 'white';
    }

    render() {
      const { clicksBtnOne, clicksBtnTwo, clicksBtnThree } = this.state;
      return (
        <div>
          <button
            onClick={ this.handleButtonOne }
            style={{ backgroundColor: this.getButtonColor(clicksBtnOne) }}
          >
            Botão 1 | Count = { clicksBtnOne }
          </button>
          <button
            onClick={ this.handleButtonTwo }
            style={{ backgroundColor: this.getButtonColor(clicksBtnTwo) }}
          >
            Botão 2 | Count = { clicksBtnTwo }
          </button>
          <button
            onClick={ this.handleButtonThree }
            style={{ backgroundColor: this.getButtonColor(clicksBtnThree) }}
          >
            Botão 3 | Count = { clicksBtnThree }
          </button>
        </div>
      );
    }
  }

  export default App;
*/  