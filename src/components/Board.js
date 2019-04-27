import React, { Component } from 'react';
import { Card } from './Card';

export default class Board extends Component {

  render() {
    const { cards } = this.props;
    
    if (cards.length == 0) {
      return <p>loading...</p>
    }

    const renderRow = (cards) => {
      return (
        <div className="row">
          {cards.map(card => {
            return <Card card={card} />
          })}
        </div>
      );
    }

    return (
      <div className="Board">
        {renderRow(cards.slice(0,13))}
        {renderRow(cards.slice(13,26))}
        {renderRow(cards.slice(26,39))}
        {renderRow(cards.slice(39))}
      </div>
    );
  }
}