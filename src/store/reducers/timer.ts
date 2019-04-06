import { RESOLVE_TIME, RESOLVE_PAUSE, CLEAR } from '../actionNames';
import { Actions } from '../actionTypes';

export type Timer = {
  value: number;
  paused: boolean;
}

const defaultState: Timer = {
  value: 0,
  paused: false
};

export default (state: Timer = defaultState, action: Actions): Timer => {
  switch (action.type) {
    case RESOLVE_TIME:
      return {value: state.value + 1, paused: false};
    case RESOLVE_PAUSE:
      return {...state, paused: action.payload};
    case CLEAR:
      return defaultState;
    default:
      return state;
  }
}