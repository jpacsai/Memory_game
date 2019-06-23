import { Card } from '../types';

export default (deck: Card[]): Card[] => {
  let shuffledDeck = deck.slice();
  
  let currentIndex = shuffledDeck.length;
  var temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = shuffledDeck[currentIndex];
    shuffledDeck[currentIndex] = shuffledDeck[randomIndex];
    shuffledDeck[randomIndex] = temporaryValue;
  }

  return shuffledDeck;
}