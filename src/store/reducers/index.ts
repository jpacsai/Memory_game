import { combineReducers } from "redux";
import gameState from "./gameState";
import theme from "./theme";
import deck from "./deck";
import openCards from "./openCards";
import matchedCards from "./matchedCards";
import moves from "./moves";
import timer from "./timer";
import scores from "./scores";

export default combineReducers({
  gameState,
  theme,
  deck,
  openCards,
  matchedCards,
  moves,
  timer,
  scores
});
