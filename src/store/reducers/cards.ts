import { RESOLVE_CARDS } from '../actionNames';
import { Card } from '../../types';
import { Actions } from '../actionTypes';

export default (state: Card[] = [], action: Actions): Card[] => {
  switch (action.type) {
    case RESOLVE_CARDS:
      return action.payload;
    default:
      return state;
  }
};