import { Card } from '../types';

export default (deck: Card[], cardIDs: number[]): string[] => {
  return cardIDs.map(cardID => {
    const card = deck.find(card => card.id === cardID);
    return card && card.url || '';
  });
}