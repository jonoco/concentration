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
} from '../actions/actionTypes';

const DefaultState = {
  cards: [],
  deck_id: '',
  isRequesting: false,
  showFaces: false,
  bestTime: null,
  startTime: Date.now()
};

export default function GameReducter(state = DefaultState, action)
{
  const { payload } = action;

  switch(action.type)
  {
    case RESET:
      return {
        ...state,
        startTime: Date.now()
      }
    case SAVE_TIME:
      return {
        ...state,
        bestTime: payload.time
      }
    case TOGGLE_FACES:
      return {
        ...state,
        showFaces: !state.showFaces
      }
    case SELECT_CARD:
      const selectedCards = state.cards.map(card => (payload.card.code == card.code ? { ...card, selected: true } : card));
      
      return {
        ...state,
        cards: selectedCards
      }
    case DESELECT_CARDS:
      const deselectedCards = state.cards.map(card => (payload.cards.includes(card) ? { ...card, selected: false } : card));
      
      return {
        ...state,
        cards: deselectedCards
      }
    case MATCH_CARDS:
      const matchedCards = state.cards.map(card => (payload.cards.includes(card) ? { ...card, matched: true, selected: false } : card));

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
        matched: false,
        selected: false
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