import React, { Component } from 'react';
import { Card } from './Card';

export default class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCard: null
    };

    this.handleCardSelect = this.handleCardSelect.bind(this);
  }


  /**
   * Selects a card to match.
   * @param  {Object} card Card being selected.
   */
  handleCardSelect(card) {
    console.log('selected ' + card.code);

    if (this.state.selectedCard) {
      // check for reselecting card
      if (this.state.selectedCard.code == card.code) {
        this.setState({ selectedCard: null });
        return;
      }

      // check for a match with last selected card.
      if (this.state.selectedCard.value == card.value) {
        console.log('card matched');
      } else {
        console.log('not a match');
      }

      this.setState({ selectedCard: null });
    } else {
      this.setState({ selectedCard: card });
    }
  }
  

  render() {
    const { cards } = this.props;
    
    if (cards.length == 0) {
      return <p>loading...</p>
    }

    const renderRow = (cards) => {
      return (
        <div className="row">
          {cards.map(card => {
            const selected = this.state.selectedCard ? this.state.selectedCard.code == card.code : false;
            return (
              <Card 
                card={card} 
                selected={selected} 
                handleClick={this.handleCardSelect} 
                key={card.code} />
            )
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