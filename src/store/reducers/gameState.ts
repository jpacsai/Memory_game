import { RESOLVE_GAME_STATE } from '../actionNames';
import { GameState } from '../../types';
import { Actions } from '../actionTypes';

const defaultState: GameState = GameState.START;

export default (state: GameState = defaultState, action: Actions): GameState => {
  switch (action.type) {
    case RESOLVE_GAME_STATE:
      return action.payload;
    default:
      return state;
  }
};