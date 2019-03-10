import { RESOLVE_CARDS } from '../actionNames';
import { Actions } from '../actionTypes';

export type Card = {
  id: number;
  url: string;
};

export default (state: Card[] = [], action: Actions): Card[] => {
  switch (action.type) {
    case RESOLVE_CARDS:
      const newCards = action.payload.reduce((deck: Card[], card: Card) => {
        return [...deck, card, card]
      }, [])
      return newCards;
    default:
      return state;
  }
};