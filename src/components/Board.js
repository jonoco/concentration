import React, { Component } from 'react';
import { Card } from './Card';

export default class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      matchWaitTime: 1000
    };

    this.handleCardSelect = this.handleCardSelect.bind(this);
  }


  componentDidUpdate(prevProps) {
    // check matches
    const { selectedCards } = this.props;
    if (selectedCards.length >= 2) {
      
      // pause to check for matches to selected cards
      setTimeout(() => {
        if (selectedCards[0].value == selectedCards[1].value) {
          this.props.matchCards(selectedCards);
        } else {
          this.props.deselectCards(selectedCards);
        }
      }, this.state.matchWaitTime);
    }
  }


  /**
   * Selects a card to match.
   * @param  {Object} card Card being selected.
   */
  handleCardSelect(card) {
    const { selectedCards } = this.props;

    // ignore select if a match check is occuring
    if (selectedCards.length >= 2) {
      return;
    }
  
    // handle reselecting card
    if (selectedCards.includes(card)) {
      this.props.deselectCards([card]);
      return;
    }

    this.props.selectCard(card);
  }
  

  render() {
    const { cards, numMatches } = this.props;
    
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
        {numMatches == 52 && 
          <h1 className='animated fadeIn'>Game over!</h1>
        }

        {renderRow(cards.slice(0,13))}
        {renderRow(cards.slice(13,26))}
        {renderRow(cards.slice(26,39))}
        {renderRow(cards.slice(39))}
      </div>
    );
  }
}