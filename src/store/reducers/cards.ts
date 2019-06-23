import { Card, CardStatus } from '../../types';
import { Actions } from '../actionTypes';
import {
  OPEN_CARD,
  CLOSE_CARDS,
  MATCH_CARDS,
  RESOLVE_DECK,
  CLEAR
} from '../actionNames';

const defaultState: Card[] = [];

export default (state: Card[] = defaultState, action: Actions): Card[] => {
  switch (action.type) {
    case RESOLVE_DECK:
        return action.payload;
    case OPEN_CARD:
      return state.map(card =>
        card.cardId === action.payload
          ? { ...card, status: CardStatus.OPEN }
          : card
      );
    case CLOSE_CARDS:
      return state.map(card =>
        card.status === CardStatus.OPEN
          ? { ...card, status: CardStatus.CLOSED }
          : card
      );
    case MATCH_CARDS:
      return state.map(card =>
        card.imageId === action.payload
          ? { ...card, status: CardStatus.MATCHED }
          : card
      );
    case CLEAR:
      return state.map(card => ({ ...card, status: CardStatus.CLOSED }) );
    default:
      return state;
  }
};
