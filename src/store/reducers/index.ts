import { combineReducers } from 'redux';
import deck from './deck';
import openCards from './openCards';
import matchedCards from './matchedCards';
import moves from './moves';

export default combineReducers({
  deck,
  openCards,
  matchedCards,
  moves
});
