import { Card } from '../types';

export default (cards: Card[]): Card[] => {
  const deck = cards.reduce((deck: Card[], card) => [...deck, card, card], []);
  return deck;
}