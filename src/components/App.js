import React, { Component } from 'react';
import Board from '../containers/BoardCont';
import Controls from '../containers/ControlsCont';

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <header>
          <h1>Concentration</h1>
        </header>
        
        <Controls />
        <Board />

      </div>
    );
  }
}

export default App;
