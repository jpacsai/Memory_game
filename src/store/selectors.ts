import { State } from './';
import { createSelector } from 'reselect';

export const getGameState = (state: State) => state.gameState;

export const getDeck = (state: State) => state.deck;

export const getOpenCards = (state: State) => state.openCards;

export const getMatchedCards = (state: State) => state.matchedCards;

export const getMoves = (state: State) => state.moves;

export const getScores = (state: State) => state.scores;

export const getTimer = (state: State) => state.timer;

export const getMinutes = createSelector(
  getTimer,
  seconds => Math.floor(seconds / 60)
);

export const getSeconds = createSelector(
  [getTimer, getMinutes],
  (seconds, minutes) => seconds - minutes * 60
);
