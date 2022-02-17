import { Component } from 'react';
import './App.css';
import DadJoke from './DadJoke';
import Counter from './Counter';
import Rick from './Rick';

class App extends Component {
  render() {
  return (
    <div>
      <DadJoke />
      <Counter className="App"/>
      <Rick />
    </div>
  )}
}

export default App;

// Aula ao vivo Ciclo de vida de componentes 

// APP.js

/*
import React from 'react';
import './App.css';
import logo from './assets/trybemestar.png';
import Timer from './components/Timer';

// [X] - Adicionar um botão para esconder e mostrar o nosso timer ⏰ ✅
// [X] - Fazer um cronômetro que vai de 0 a 5, infinitas vezes. ✅
// [X] - Adicionar as 3 fases ✅

class App extends React.Component {
  state = {
    showTimer: false,
  }

  // ! Se for true => false
  // ! Se for false => true
  toggleTimer = () => {
    this.setState((prevState) => ({ showTimer: !prevState.showTimer }));
  }

  render() {
    const { showTimer } = this.state;
    return (
      <div>
        <header>
          <img src={ logo } className="App-logo" alt="logo" />
        </header>
        {
          showTimer && <Timer />
        }
        <button type="button" onClick={ this.toggleTimer }>
          {
            showTimer ? 'Esconder Timer' : 'Mostrar Timer'
          }
        </button>
      </div>
    );
  }
}
// Condicao ? caso seja verdadeiro : caso seja falso
export default App;

// Timer.js

import React from 'react';

class Timer extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      phases: ['🫁 Inspire...', '😑 Segure...', '😮‍💨Expire...'],
      currentPhase: 0,
    };
    this.timer = null;
  }

  componentDidMount() {
    console.log('Iniciar o timer');
    const ONE_SECOND = 1000;
    this.timer = setInterval(
      () => this.setState((prevState) => ({ counter: prevState.counter + 1 })),
      ONE_SECOND,
    );
  }

  // recebo PropsAntigas , EstadoAntigo
  componentDidUpdate(prevProps, prevState) {
    const LAST_PHASE = 2;
    const TIME_LIMIT = 5;

    const { counter, currentPhase: oldPhase } = prevState;

    if (counter === TIME_LIMIT) {
      this.setState({
        counter: 0,
        currentPhase: oldPhase === LAST_PHASE ? 0 : oldPhase + 1,
      });
    }
    console.log('Atualizando o estado do componente');
  }

  componentWillUnmount() {
    console.log('Desmonatando o componente');
    clearInterval(this.timer);
  }

  render() {
    const { counter, phases, currentPhase } = this.state;

    return (
      <section>
        <h1>{phases[currentPhase]}</h1>
        <h2>{counter}</h2>
      </section>
    );
  }
}

export default Timer;
*/