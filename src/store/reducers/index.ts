import { combineReducers } from 'redux';
import cards from './cards';
import openCards from './openCards';
import matchedCards from './matchedCards';

export default combineReducers({
  cards,
  openCards,
  matchedCards
});
