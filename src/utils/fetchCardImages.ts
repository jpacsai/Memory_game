import { Cards } from '../types';
import { themes } from '../config';

export default (cardName: string) => {
  const images = themes.find((image: Cards) => image.name === cardName);
  if (!images) throw new Error('no card images found');
  return images;
};