import { Card, Cards } from '../types';
import { themes } from '../config';

export default (theme: string): Card[] => {
  const image = themes.find((t: Cards) => t.name === theme);
  if (!image) return [];
  const urls = image.images;
  const deckUrls = urls.reduce((deck: {url: string, imageId: number}[], url: string, index: number) => {
    const card = { url, imageId: index }
    return [...deck, card, card]
  }, []);
  const deck = deckUrls.map((url, index) => ({ ...url, cardId: index }));
  console.log(deck);
  return deck;
}