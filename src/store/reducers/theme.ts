import { RESOLVE_THEME } from '../actionNames';
import { Actions } from '../actionTypes';
import { defaultDeck } from './../../config';

const defaultState = defaultDeck;

export default (state: string = defaultState, action: Actions): string => {
  switch (action.type) {
    case RESOLVE_THEME:
      return action.payload;
    default:
      return state;
  }
};