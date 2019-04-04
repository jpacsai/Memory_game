import { State } from './';
import { createSelector } from 'reselect';

export const getDeck = (state: State) => state.deck;

export const getOpenCards = (state: State) => state.openCards;

export const getMatchedCards = (state: State) => state.matchedCards;

export const getMoves = (state: State) => state.moves;

export const getTime = (state: State) => state.timer;

export const getMinutes = createSelector(
  getTime,
  time => Math.floor(time / 60)
);

export const getSeconds = createSelector(
  [getTime, getMinutes],
  (time, minutes) => time - minutes * 60
);