import { Card, Cards } from '../types';
import { themes } from '../config';

export default (theme: string): Card[] => {
  const image = themes.find((t: Cards) => t.name === theme);
  if (!image) return [];
  const urls = image.images;
  const deckURLs = urls.reduce((deck: string[], url: string) => [...deck, url, url], []);
  const deck = deckURLs.map((url, index: number): Card => (
    {
      id: index,
      url
    }
  ));
  return deck;
}