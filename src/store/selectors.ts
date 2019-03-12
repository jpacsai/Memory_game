import { State } from './';
import { createSelector } from 'reselect';

export const getDeck = (state: State) => state.cards;