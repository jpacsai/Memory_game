import { State } from './';
import { createSelector } from 'reselect';
import { CardStatus } from '../types';

export const getGameState = (state: State) => state.gameState;

export const getTheme = (state: State) => state.theme;

export const getCards = (state: State) => state.cards;

export const getOpenCards = createSelector(
  getCards,
  cards => cards.filter(card => card.status === CardStatus.OPEN)
);

export const getOpenCardsCardIDs = createSelector(
  getOpenCards,
  cards => cards.map(card => card.cardId)
);

export const getOpenCardsImageIDs = createSelector(
  getOpenCards,
  cards => cards.map(card => card.imageId)
);

export const getMatchedCards = createSelector(
  getCards,
  cards => cards.filter(card => card.status === CardStatus.MATCHED)
);

export const getMatchedCardImageIDs = createSelector(
  getMatchedCards,
  cards => cards.map(card => card.imageId)
);

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
