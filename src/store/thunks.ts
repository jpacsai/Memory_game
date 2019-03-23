import { Action } from "redux";
import { ExtraArguments, State } from "./";
import { resolveCards } from "./actionCreators";
import createFullDeck from "../utils/createDeck";
import shuffle from "../utils/shuffle";
import fetchCardImages from "./../utils/fetchCardImages";

export type Thunk = (
  dispatch: (action: Action | Thunk) => any,
  getState: () => State,
  extraArguments: ExtraArguments
) => any;

export const fetchInitData = (): Thunk => (dispatch, getState) => {
  const defaultCards = "fruits";
  dispatch(createDefaultDeck(defaultCards));
};

export const createDefaultDeck = (cardName: string): Thunk => (dispatch, getState) => {
  try {
    const images = fetchCardImages(cardName);
    const fullDeck = createFullDeck(images.images);
    const shuffledDeck = shuffle(fullDeck);
    dispatch(resolveCards(shuffledDeck));
  } catch (error) {
    console.log(error);
  }
};
/* 
export const checkOpenCard = (cardID: number): Thunk => (dispatch, getState) {
  // resolve card
  // 2 cards ? checkMatch
}

export const checkMatch = (cardID: number): Thunk => (dispatch, getState) {
  // dispatch(handleMatch());
  // dispatch(handleNoMatch());
}

export const handleMatch = () => {
  // resolve cards []
  // match animation
  // move to matchedCards
}

export const handleNoMatch = () => {
  // no match animation
  // resolve cards []
} */