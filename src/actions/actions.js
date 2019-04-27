import axios from 'axios';
import { 
  REQUEST_DECK,
  RECEIVE_DECK,
  REQUEST_CARDS,
  RECEIVE_CARDS,
  MATCH_CARDS
} from './actionTypes';


export const matchCards = (cards) => {
  return {
    type: MATCH_CARDS,
    payload: { cards }
  }
}


const requestDeck = () => {
  return {
    type: REQUEST_DECK
  }
}


const receiveDeck = deck_id => {
  return {
    type: RECEIVE_DECK,
    payload: { deck_id }
  }
}


const requestCards = () => {
  return {
    type: REQUEST_CARDS
  }
}


const receiveCards = cards => {
  return {
    type: RECEIVE_CARDS,
    payload: { cards }
  }
}


/**  
 * Requests a shuffled deck.
 * @param  {String} deck_id Deck to request shuffled. If null, a new deck is created.
 */
export const fetchDeck = (deck_id = 'new') => {
  return (dispatch) => {
    dispatch(requestDeck());

    return axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/shuffle/`)
      .then( res => {
        console.log('Deck response:', res);

        dispatch(receiveDeck(res.data.deck_id));
      });
  }
}


/** 
 * Fetch 52 cards from the deck.
 * @param  {String} deck_id Deck ID to draw from.
 */
export const fetchCards = (deck_id = 'new') => {
  return (dispatch) => {
    dispatch(requestCards());

    return axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=52`)
      .then( res => {
        console.log('Cards response:', res);

        dispatch(receiveCards(res.data.cards));
      });
  }
}
