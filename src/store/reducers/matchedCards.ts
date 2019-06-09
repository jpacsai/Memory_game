import { MATCHED_CARDS, CLEAR } from '../actionNames';
import { Actions } from '../actionTypes';

export default (state: number[] = [], action: Actions): number[] => {
  switch (action.type) {
    case MATCHED_CARDS:
      return [...state, action.payload];
    case CLEAR:
      return [];
    default:
      return state;
  }
};