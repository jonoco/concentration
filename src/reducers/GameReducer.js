import {
  SHUFFLE_DECK,
  DRAW_CARDS,
} from '../actions/actionTypes';

const DefaultState = {};

export default function GameReducter(state = DefaultState, action)
{
  switch(action.type)
  {
    case SHUFFLE_DECK:
      break;
     case DRAW_CARDS:
       break;
    default:
      return state;
  }
}