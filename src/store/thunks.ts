import { Action } from 'redux';
import { ExtraArguments, State } from './';
import { Card } from '../types';
import {
  resolveDeck,
  resolveOpenCard,
  resolveMatchedCards,
  closeOpenedCards,
  resolveMove,
  resolveTime,
  clear
} from './actions';
import createFullDeck from '../utils/createDeck';
import shuffle from '../utils/shuffle';
import fetchCardImages from './../utils/fetchCardImages';
import getCardURLs from '../utils/getCardURLs';
import { getDeck, getOpenCards, getMoves } from './selectors';

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
  const defaultCards = 'fruits';
  dispatch(createDefaultDeck(defaultCards));
};

export const createDefaultDeck = (cardName: string): Thunk => (dispatch, getState) => {
  try {
    const images = fetchCardImages(cardName);
    const fullDeck = createFullDeck(images.images);
    dispatch(shuffleDeck(fullDeck));
  } catch (error) {
    console.log(error);
  }
};

export const shuffleDeck = (deck: Card[]): Thunk => (dispatch, getState) => {
  const shuffledDeck = shuffle(deck);
  dispatch(resolveDeck(shuffledDeck));
}

export const restart = (): Thunk => (dispatch, getState) => {
  clearInterval(timer);
  dispatch(clear());
  const deck = getDeck(getState()) as Card[];
  dispatch(shuffleDeck(deck));
}

export const handleOpenCard = (cardID: number): Thunk => (dispatch, getState) => {
  const moves = getMoves(getState());
  const openCards = getOpenCards(getState());
  if (moves === 0 && openCards.length === 0) dispatch(startTimer());
  dispatch(resolveOpenCard(cardID));
  if (openCards.length + 1 === 2) dispatch(checkMatch(openCards));
};

export const checkMatch = (cardIDs: number[]): Thunk => (dispatch, getState) => {
  const deck = getDeck(getState()) as Card[];
  const urls = getCardURLs(deck, cardIDs);
  if (urls[0] === urls[1]) dispatch(handleMatch(cardIDs));
  else dispatch(handleNoMatch());
  dispatch(resolveMove());
};

export const handleMatch = (cardIDs: number[]): Thunk => (dispatch, getState) => {
  dispatch(delayAction(closeOpenedCards(), 500));
  dispatch(resolveMatchedCards(cardIDs));
};

export const handleNoMatch = (): Thunk => (dispatch, getState) => {
  dispatch(delayAction(closeOpenedCards(), 1000));
};

export const startTimer = (): Thunk => (dispatch, getState) => {
  clearInterval(timer);
  timer = setInterval(() => dispatch(resolveTime()), 1000);
};

export const pauseTimer = (): Thunk => (dispatch, getState) => {
  clearInterval(timer);
};