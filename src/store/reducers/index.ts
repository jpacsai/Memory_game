import { combineReducers } from "redux";
import gameState from "./gameState";
import deck from "./deck";
import openCards from "./openCards";
import matchedCards from "./matchedCards";
import moves from "./moves";
import timer from "./timer";
import scores from "./scores";

export default combineReducers({
  gameState,
  deck,
  openCards,
  matchedCards,
  moves,
  timer,
  scores
});
