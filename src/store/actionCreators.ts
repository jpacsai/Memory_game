import { action } from 'typesafe-actions';
import * as actionNames from './actionNames';
import { Card } from '../types';

export const resolveCards = (cards: Card[]) => action(actionNames.RESOLVE_CARDS, cards);
export const openCard = (card: number) => action(actionNames.OPEN_CARD, card);
export const closeCards = () => action(actionNames.CLOSE_CARDS);
export const matchedCards = (cards: number[]) => action(actionNames.MATCHED_CARDS, cards);
export const clear = () => action(actionNames.CLEAR);