import { Cards } from './types';

export const maxScore = 3; // if changed update in varibles.scss too

export const deductScoreFirst = 12;

export const deductScoreStep = 5;

export const defaultDeck = "fruits";

export const cardImages = [
  {
    name: "fruits",
    images: [
      "https://res.cloudinary.com/jutzee/image/upload/v1538133258/memory-game/watermelon.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1538133258/memory-game/raspberry.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1538133258/memory-game/plum.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1538133257/memory-game/lemon.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1538133256/memory-game/grapes.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1538133256/memory-game/banana.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1538133256/memory-game/cherry.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1538133256/memory-game/avocado.svg",
    ]
  },
  {
    name: "space",
    images: [
      "https://res.cloudinary.com/jutzee/image/upload/v1559854133/memory-game/space/spaceship.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1559854132/memory-game/space/solar-system.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1559854131/memory-game/space/saturn.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1559854130/memory-game/space/planet-earth.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1559854129/memory-game/space/observatory.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1559854282/memory-game/space/comet-1.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1559854127/memory-game/space/venus.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1559854126/memory-game/space/ursa-major.svg"
    ]
  }
] as Cards[];