import {
  START_TIMER,
  END_GAME,
  RESOLVE_TIME,
  RESOLVE_PAUSE,
  CLEAR
} from "../actionNames";
import { Actions } from "../actionTypes";

export type Timer = {
  timerSeconds: number;
  timerOn: boolean;
  paused: boolean;
};

const defaultState: Timer = {
  timerSeconds: 0,
  timerOn: false,
  paused: false
};

export default (state: Timer = defaultState, action: Actions): Timer => {
  switch (action.type) {
    case START_TIMER:
      return { ...state, timerOn: true };
    case RESOLVE_TIME:
      return { ...state, timerSeconds: state.timerSeconds + 1 };
    case RESOLVE_PAUSE:
      return { ...state, paused: action.payload };
    case END_GAME:
      return { ...state, timerOn: false, paused: false };
    case CLEAR:
      return defaultState;
    default:
      return state;
  }
};
