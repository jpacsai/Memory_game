import { Card } from '../types';
import createDeck from '../utils/createDeck';
import shuffleDeck from '../utils/shuffleDeck';

export default (): Card[] => {
  const newDeck = createDeck();
  return shuffleDeck(newDeck);
};
