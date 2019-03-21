import { State } from './';
import { createSelector } from 'reselect';

export const getDeck = (state: State) => state.cards;

export const getOpenCards = (state: State) => state.openCards;

export const getMatchedCards = (state: State) => state.matchedCards;
