import { Cards } from '../types';
import cardImages from './../cardImages';

export default (cardName: string) => {
  const images = cardImages.find((image: Cards) => image.name === cardName);
  if (!images) throw new Error('no card images found');
  return images;
};