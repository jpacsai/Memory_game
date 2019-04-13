import { DEDUCT_SCORE, CLEAR } from '../actionNames';
import { Actions } from '../actionTypes';
import { maxScore } from './../../config';

const defaultState = maxScore;

export default (state: number = defaultState, action: Actions): number => {
  switch (action.type) {
    case DEDUCT_SCORE:
      return action.payload;
    case CLEAR:
      return defaultState;
    default:
      return state;
  }
};