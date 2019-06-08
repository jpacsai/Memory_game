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
import getCardURLs from "../utils/getCardURLs";
import {
  getDeck,
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

export const handleOpenCard = (cardID: number): Thunk => (dispatch, getState) => {
  const moves = getMoves(getState());
  const openCards = getOpenCards(getState());
  if (moves === 0 && openCards.length === 0) dispatch(startTimer());
  dispatch(resolveOpenCard(cardID));
  if (openCards.length + 1 === 2) dispatch(checkMatch());
};

export const checkMatch = (): Thunk => (dispatch, getState) => {
  const deck = getDeck(getState()) as Card[];
  const openCards = getOpenCards(getState());
  const urls = getCardURLs(deck, openCards);
  if (urls[0] === urls[1]) dispatch(handleMatch(openCards));
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

export const handleMatch = (openCards: number[]): Thunk => (dispatch,getState) => {
  dispatch(delayAction(closeOpenedCards(), 500));
  dispatch(resolveMatchedCards(openCards));
  const matchedCards = getMatchedCards(getState());
  if (matchedCards.length === 16) {
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
