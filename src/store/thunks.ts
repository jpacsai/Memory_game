import { Action } from "redux";
import { ExtraArguments, State } from "./";
import { GameState } from "../types";
import { defaultDeck, deductScoreFirst, deductScoreStep } from "../config";
import {
  resolveGameState,
  resolveTheme,
  resolveOpenCard,
  resolveDeck,
  closeCards,
  resolveMatchedCards,
  resolveMove,
  resolveTime,
  deductScore,
  clear
} from "./actions";
import {
  getCards,
  getOpenCards,
  getOpenCardsImageIDs,
  getMoves,
  getScores,
  getMatchedCards
} from "./selectors";
import getDeck from '../utils/getDeck';
import shuffleDeck from '../utils/shuffleDeck';

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

export const createDeck = (): Thunk => (dispatch, getState) => {
  const deck = getDeck();
  dispatch(resolveDeck(deck));
};

export const shuffle = (): Thunk => (dispatch, getState) => {
  const deck = getCards(getState());
  const shuffledDeck = shuffleDeck(deck);
  dispatch(resolveDeck(shuffledDeck));
};

export const restart = (): Thunk => (dispatch, getState) => {
  clearInterval(timer);
  dispatch(clear());
  dispatch(shuffle());
};

export const handleOpenCard = (cardId: number): Thunk => (dispatch, getState) => {
  const openCardsNumber = getOpenCards(getState()).length;
  dispatch(resolveOpenCard(cardId));
  if (openCardsNumber + 1 === 2) dispatch(checkMatch());
}

export const checkMatch = (): Thunk => (dispatch, getState) => {
  const openCards = getOpenCardsImageIDs(getState());
  if (openCards[0] === openCards[1]) dispatch(handleMatch(openCards[0]));
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

export const handleMatch = (imageId: number): Thunk => (dispatch,getState) => {
  dispatch(delayAction(resolveMatchedCards(imageId), 500));
  const matchedCardsNumber = getMatchedCards(getState()).length;
  if (matchedCardsNumber === 14) {
    dispatch(delayAction(resolveGameState(GameState.END), 1200));
    dispatch(clearTimer());
  }
};

export const handleNoMatch = (): Thunk => (dispatch, getState) => {
  dispatch(delayAction(closeCards(), 1000));
};

export const startGame = (): Thunk => (dispatch, getState) => {
  dispatch(resolveGameState(GameState.GAME));
  dispatch(startTimer());
}

export const startTimer = (): Thunk => (dispatch, getState) => {
  timer = setInterval(() => dispatch(resolveTime()), 1000);
};

export const clearTimer = (): Thunk => (dispatch, getState) => {
  clearInterval(timer);
};


