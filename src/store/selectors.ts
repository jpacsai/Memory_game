import { State } from './';
import { createSelector } from 'reselect';

export const getDeck = (state: State) => state.deck;

export const getOpenCards = (state: State) => state.openCards;

export const getMatchedCards = (state: State) => state.matchedCards;

export const getMoves = (state: State) => state.moves;