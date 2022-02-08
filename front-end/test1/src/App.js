import { Component } from 'react';
import './App.css';
import Counter from './Counter';
import Rick from './Rick';

class App extends Component {
  render() {
  return (
    <div>
      <Counter className="App"/>
      <Rick />
    </div>
  )}
}

export default App;
