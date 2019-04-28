import React, { Component } from 'react';
import { Card } from './Card';

export default class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      matchWaitTime: 1000
    };

    this.handleCardSelect = this.handleCardSelect.bind(this);
    this.handleGameOver = this.handleGameOver.bind(this);
  }


  componentDidUpdate(prevProps) {
    // check for game over
    if (this.props.numMatches == 52) {
      this.handleGameOver();
    }

    // check matches
    const { selectedCards } = this.props;
    if (selectedCards.length >= 2) {
      
      // check for matches to selected cards
      console.log('selected cards: ', selectedCards);

      
      setTimeout(() => {
        if (selectedCards[0].value == selectedCards[1].value) {
          console.log('match found');
          this.props.matchCards(selectedCards);
        } else {
          console.log('not a match');
          this.props.deselectCards(selectedCards);
        }
      }, this.state.matchWaitTime);
    }
  }


  handleGameOver() {
    console.log('game over');
  }


  /**
   * Selects a card to match.
   * @param  {Object} card Card being selected.
   */
  handleCardSelect(card) {
    const { selectedCards } = this.props;

    if (selectedCards.length >= 2) {
      console.log('wait for match check');
      return;
    }
  
    // handle reselecting card
    if (selectedCards.includes(card)) {
      console.log('reselected ' + card.code);      
      this.props.deselectCards([card]);
      return;
    }
    
    console.log('selected ' + card.code);

    this.props.selectCard(card);
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
            return (
              <Card 
                card={card} 
                selected={!!card.selected} 
                showFaces={this.props.showFaces}
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