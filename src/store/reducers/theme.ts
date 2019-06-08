import { RESOLVE_THEME, CLEAR } from '../actionNames';
import { Actions } from '../actionTypes';
import { defaultDeck } from './../../config';

const defaultState = defaultDeck;

export default (state: string = defaultState, action: Actions): string => {
  switch (action.type) {
    case RESOLVE_THEME:
      return action.payload;
    case CLEAR:
      return defaultState;
    default:
      return state;
  }
};