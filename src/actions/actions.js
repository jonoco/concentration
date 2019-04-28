import axios from 'axios';
import { 
  REQUEST_DECK,
  RECEIVE_DECK,
  REQUEST_CARDS,
  RECEIVE_CARDS,
  MATCH_CARDS,
  SELECT_CARD,
  DESELECT_CARDS,
  TOGGLE_FACES,
  SAVE_TIME,
  RESET
} from './actionTypes';


const reset = () => {
  return {
    type: RESET
  }
}


export const saveTime = time => {
  return {
    type: SAVE_TIME,
    payload: { time }
  }
}


export const toggleFaces = () => {
  return {
    type: TOGGLE_FACES
  }
}


export const selectCard = card => {
  return {
    type: SELECT_CARD,
    payload: { card }
  }
}


export const deselectCards = cards => {
  return {
    type: DESELECT_CARDS,
    payload: { cards }
  }
}


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


export const newGame = deck_id => {
  return (dispatch) => {
    dispatch(reset());

    dispatch(fetchDeck())
      .then((res) => {
        return dispatch(fetchCards(res.deck_id));
      });
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

        return res.data;
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

        return res.data;
      });
  }
}
