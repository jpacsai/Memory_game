import { Action } from "redux";
import { ExtraArguments, State } from "./";
import { GameState, Card } from "../types";
import { defaultDeck, deductScoreFirst, deductScoreStep } from "../config";
import {
  resolveGameState,
  resolveTheme,
  resolveOpenCard,
  resolveMatchedCards,
  closeOpenedCards,
  resolveMove,
  resolveTime,
  deductScore,
  clear
} from "./actions";
import {
  getOpenCards,
  getMoves,
  getScores,
  getMatchedCards
} from "./selectors";

let timer: any;

export type Thunk = (
  dispatch: (action: Action | Thunk) => any,
  getState: () => State,
  extraArguments: ExtraArguments
) => any;

export const delayAction = (func: any, time: number): Thunk => (dispatch, getState) => {
  setTimeout(() => {
    dispatch(func);
  }, time);
};

export const fetchInitData = (): Thunk => (dispatch, getState) => {
  dispatch(resolveTheme(defaultDeck));
};

export const restart = (): Thunk => (dispatch, getState) => {
  clearInterval(timer);
  dispatch(clear());
};

export const handleOpenCard = (card: Card): Thunk => (dispatch, getState) => {
  const moves = getMoves(getState());
  const openCards = getOpenCards(getState());
  if (moves === 0 && openCards.length === 0) dispatch(startTimer());
  dispatch(resolveOpenCard(card));
  if (openCards.length + 1 === 2) dispatch(checkMatch());
};

export const checkMatch = (): Thunk => (dispatch, getState) => {
  const openCards = getOpenCards(getState());
  if (openCards[0].imageId === openCards[1].imageId) dispatch(handleMatch(openCards));
  else dispatch(handleNoMatch());
  dispatch(resolveMove());
  const moves = getMoves(getState());
  const scores = getScores(getState());
  if (scores === 0) return;
  else if (
    moves === deductScoreFirst ||
    (moves > deductScoreFirst &&
      (moves - deductScoreFirst) % deductScoreStep === 0)
  ) {
    dispatch(deductScore());
  }
};

export const handleMatch = (openCards: Card[]): Thunk => (dispatch,getState) => {
  dispatch(delayAction(closeOpenedCards(), 500));
  dispatch(resolveMatchedCards(openCards[0].imageId));
  const matchedCards = getMatchedCards(getState());
  if (matchedCards.length === 8) {
    dispatch(delayAction(resolveGameState(GameState.END), 1200));
    clearInterval(timer);
  }
};

export const handleNoMatch = (): Thunk => (dispatch, getState) => {
  dispatch(delayAction(closeOpenedCards(), 1000));
};

export const startTimer = (): Thunk => (dispatch, getState) => {
  timer = setInterval(() => dispatch(resolveTime()), 1000);
  dispatch(resolveGameState(GameState.GAME));
};

export const pauseTimer = (): Thunk => (dispatch, getState) => {
  dispatch(resolveGameState(GameState.PAUSED));
  clearInterval(timer);
};

export const restartTimer = (): Thunk => (dispatch, getState) => {
  dispatch(resolveGameState(GameState.GAME));
  timer = setInterval(() => dispatch(resolveTime()), 1000);
};
