import { Card } from '../types';

export default (urls: string[]): Card[] => {
  const deck = urls.reduce((deck: Card[], url, index) => {
    const card = {
      id: index,
      url
    }
    return [...deck, card, card]
  }, []);
  return deck;
}