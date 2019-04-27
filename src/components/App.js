import React, { Component } from 'react';
import Board from '../containers/BoardCont';

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <h1>Concentration</h1>
        </header>

        <Board />

      </div>
    );
  }
}

export default App;
