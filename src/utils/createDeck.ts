import { Card } from '../types';

export default (urls: string[]): Card[] => {
  const deckURLs = urls.reduce((deck: string[], url: string) => [...deck, url, url], []);
  const deck = deckURLs.map((url, index: number): Card => (
    {
      id: index,
      url
    }
  ));
  return deck;
}