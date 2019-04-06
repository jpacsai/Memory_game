import { action } from 'typesafe-actions';
import * as actionNames from './actionNames';
import { Card } from '../types';

export const resolveDeck = (cards: Card[]) => action(actionNames.RESOLVE_DECK, cards);
export const resolveOpenCard = (card: number) => action(actionNames.OPEN_CARD, card);
export const closeOpenedCards = () => action(actionNames.CLOSE_CARDS);
export const resolveMatchedCards = (cards: number[]) => action(actionNames.MATCHED_CARDS, cards);
export const resolveMove = () => action(actionNames.RESOLVE_MOVE);
export const startTime = () => action(actionNames.START_TIMER);
export const resolveTime = () => action(actionNames.RESOLVE_TIME);
export const resolvePause = (pause: boolean) => action(actionNames.RESOLVE_PAUSE, pause);
export const clear = () => action(actionNames.CLEAR);