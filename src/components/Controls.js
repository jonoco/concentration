import React, { Component } from 'react';
import { Info } from './Info';

export default class Controls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      elapsedTime: 0
    }
  }


  componentDidMount() {
    this.timerHandle = setInterval(() => {
      this.setState({ elapsedTime: Date.now() - this.props.startTime })
    }, 1000);
  }


  componentWillUnmount() {
    clearInterval(this.timerHandle);
  }


  componentDidUpdate() {
    const { numMatches, bestTime, saveTime } = this.props;

    // check for game over
    if (numMatches == 52) {
      // save the best time
      if (!bestTime || this.state.elapsedTime < bestTime) {
        saveTime(this.state.elapsedTime);  
      }
    }
  }


  render() {
    const { numMatches, deck, newGame, toggleFaces, bestTime } = this.props;
    return (
      <div className="Controls">
        <Info numMatches={numMatches} time={this.state.elapsedTime} bestTime={bestTime} />
        <button onClick={() => newGame(deck)}>New game</button>
        <button onClick={() => toggleFaces()}>Toggle faces</button>
      </div>
    );
  }
}