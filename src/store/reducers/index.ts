import { combineReducers } from 'redux';
import gameState from './gameState';
import theme from './theme';
import cards from './cards';
import moves from './moves';
import timer from './timer';
import scores from './scores';

export default combineReducers({
  gameState,
  theme,
  cards,
  moves,
  timer,
  scores
});
