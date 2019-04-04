import { TICK, CLEAR } from '../actionNames';
import { Actions } from '../actionTypes';

export default (state: number = 0, action: Actions): number => {
  switch (action.type) {
    case TICK:
      return state + 1;
    case CLEAR:
      return 0;
    default:
      return state;
  }
}