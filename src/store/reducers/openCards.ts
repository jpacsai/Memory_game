import { OPEN_CARD, CLOSE_CARDS, CLEAR } from '../actionNames';
import { Actions } from '../actionTypes';

export default (state: number[] = [], action: Actions): number[] => {
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