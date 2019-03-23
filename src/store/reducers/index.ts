import { combineReducers } from 'redux';
import deck from './deck';
import openCards from './openCards';
import matchedCards from './matchedCards';

export default combineReducers({
  deck,
  openCards,
  matchedCards
});
