import { OPEN_CARD, CLOSE_CARDS, CLEAR } from '../actionNames';
import { Card } from '../../types';
import { Actions } from '../actionTypes';

export default (state: Card[] = [], action: Actions): Card[] => {
  switch (action.type) {
    case OPEN_CARD:
      return [...state, action.payload];
    case CLOSE_CARDS:
    case CLEAR:
      return [];
    default:
      return state;
  }
};