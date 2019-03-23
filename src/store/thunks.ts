import { Action } from "redux";
import { ExtraArguments, State } from "./";
import { Card } from '../types';
import { resolveDeck, resolveOpenCard, resolveMatchedCards, closeOpenCards } from "./actionCreators";
import createFullDeck from "../utils/createDeck";
import shuffle from "../utils/shuffle";
import fetchCardImages from "./../utils/fetchCardImages";
import getCardURLs from "../utils/getCardURLs";
import { getDeck, getOpenCards, } from './selectors';

export type Thunk = (
  dispatch: (action: Action | Thunk) => any,
  getState: () => State,
  extraArguments: ExtraArguments
) => any;

export const delayAction = (func: any, time: number): Thunk => (dispatch, getState) => {
  setTimeout(() => {
    dispatch(func);
  }, time);
}

export const fetchInitData = (): Thunk => (dispatch, getState) => {
  const defaultCards = "fruits";
  dispatch(createDefaultDeck(defaultCards));
};

export const createDefaultDeck = (cardName: string): Thunk => (dispatch, getState) => {
  try {
    const images = fetchCardImages(cardName);
    const fullDeck = createFullDeck(images.images);
    const shuffledDeck = shuffle(fullDeck);
    dispatch(resolveDeck(shuffledDeck));
  } catch (error) {
    console.log(error);
  }
};

export const handleOpenCard = (cardID: number): Thunk => (dispatch, getState) => {
  dispatch(resolveOpenCard(cardID));
  const openCards = getOpenCards(getState());
  if (openCards.length === 2) dispatch(checkMatch(openCards))
}

export const checkMatch = (cardIDs: number[]): Thunk => (dispatch, getState) => {
  const deck = getDeck(getState()) as Card[];
  const urls = getCardURLs(deck, cardIDs);
  if (urls[0] === urls[1]) dispatch(handleMatch(cardIDs));
  else dispatch(handleNoMatch())
}

export const handleMatch = (cardIDs: number[]): Thunk => (dispatch, getState) => {
  dispatch(closeOpenCards());
  dispatch(resolveMatchedCards(cardIDs));
}

export const handleNoMatch = (): Thunk => (dispatch, getState) => {
  dispatch(delayAction(closeOpenCards(), 1000));
}
