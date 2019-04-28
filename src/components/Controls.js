import React, { Component } from 'react';
import { Info } from './Info';

export default class Controls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startTime: Date.now(),
      elapsedTime: 0
    }
  }

  componentDidMount() {
    this.timerHandle = setInterval(() => {
      this.setState({ elapsedTime: Date.now() - this.state.startTime })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerHandle);
  }

  render() {
    const { numMatches, deck, newGame, toggleFaces } = this.props;
    return (
      <div className="Controls">
        <Info numMatches={numMatches} time={this.state.elapsedTime} />
        <button onClick={() => newGame(deck)}>New game</button>
        <button onClick={() => toggleFaces()}>Toggle faces</button>
      </div>
    );
  }
}