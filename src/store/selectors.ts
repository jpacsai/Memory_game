import { State } from './';
import { createSelector } from 'reselect';

export const getDeck = (state: State) => state.deck;

export const getOpenCards = (state: State) => state.openCards;

export const getMatchedCards = (state: State) => state.matchedCards;

export const getMoves = (state: State) => state.moves;

export const getTimer = (state: State) => state.timer;

export const getTimerValue = createSelector(
  getTimer,
  timer => timer.timerSeconds
)

export const getMinutes = createSelector(
  getTimerValue,
  seconds => Math.floor(seconds / 60)
);

export const getSeconds = createSelector(
  [getTimerValue, getMinutes],
  (seconds, minutes) => seconds - minutes * 60
);

export const getTimerPaused = createSelector(
  getTimer,
  timer => timer.paused
);

export const getTimerOn = createSelector(
  getTimer,
  timer => timer.timerOn
);