import { 
  SHUFFLE_DECK,
  DRAW_CARDS
} from './actionTypes';


/**
 * Shuffles the deck
 */
export const shuffleDeck = () => {
  return {
    type: SHUFFLE_DECK
  };
};


/** 
 * Draws new cards.
 */
export const drawCards = () => {
  return {
    type: DRAW_CARDS
  }
}
