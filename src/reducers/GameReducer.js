import {
  REQUEST_DECK,
  RECEIVE_DECK,
  REQUEST_CARDS,
  RECEIVE_CARDS,
  MATCH_CARDS
} from '../actions/actionTypes';

const DefaultState = {
  cards: [],
  deck_id: '',
  isRequesting: false
};

export default function GameReducter(state = DefaultState, action)
{
  const { payload } = action;

  switch(action.type)
  {
    case MATCH_CARDS:
      const matchedCards = state.cards.map(card => (payload.cards.includes(card) ? { ...card, matched: true } : card));

      return {
        ...state,
        cards: matchedCards        
      }
    case REQUEST_DECK:
      return { 
        ...state,
        isRequesting: true
      }
    case RECEIVE_DECK:
      return { 
        ...state,
        deck_id: payload.deck_id, 
        isRequesting: false
      }
    case REQUEST_CARDS:
      return {
        ...state,
        isRequesting: true
      }
    case RECEIVE_CARDS:
      const cards = payload.cards.map(card => ({
        ...card,
        matched: false
      }));

      return {
        ...state,
        cards,
        isRequesting: false
      }
    default:
      return state;
  }
}