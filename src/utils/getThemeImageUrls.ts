import { Cards } from '../types';
import { themes, defaultDeck } from '../config';

export default (theme: string): string[] => {
  const image = themes.find((t: Cards) => t.name === theme);
  return image ? image.images : themes.find((t: Cards) => t.name === defaultDeck)!.images;
}