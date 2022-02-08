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
