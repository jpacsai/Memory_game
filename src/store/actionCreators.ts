import { action } from 'typesafe-actions';
import * as actionNames from './actionNames';
import { GameState, Card } from '../types';

export const resolveGameState = (gameState: GameState) =>
  action(actionNames.RESOLVE_GAME_STATE, gameState);
export const resolveTheme = (theme: string) => action(actionNames.RESOLVE_THEME, theme);
export const resolveOpenCard = (card: number) => action(actionNames.OPEN_CARD, card);
export const closeOpenedCards = () => action(actionNames.CLOSE_CARDS);
export const resolveMatchedCards = (cards: number[]) => action(actionNames.MATCHED_CARDS, cards);
export const resolveMove = () => action(actionNames.RESOLVE_MOVE);
export const resolveTime = () => action(actionNames.RESOLVE_TIME);
export const resolvePause = (pause: boolean) => action(actionNames.RESOLVE_PAUSE, pause);
export const deductScore = () => action(actionNames.DEDUCT_SCORE);
export const clear = () => action(actionNames.CLEAR);