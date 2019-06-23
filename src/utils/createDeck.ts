import { Card, CardStatus } from '../types';

export default (): Card[] => {
  const arr = Array.from(Array(8), (x, i) => i);
  const imageIds = arr.reduce((sum, _, i) => [...sum, i, i], [] as number[]);
  const cards = imageIds.map((id, i) => ({
    imageId: id,
    cardId: i,
    status: CardStatus.CLOSED
  }));
  return cards;
};