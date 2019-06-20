import { Cards } from './types';

export const maxScore = 3; // if changed update in varibles.scss too

export const deductScoreFirst = 12;

export const deductScoreStep = 5;

export const defaultDeck = "fruits";

export const themes = [
  {
    name: "fruits",
    images: [
      "https://res.cloudinary.com/jutzee/image/upload/v1538133258/memory-game/fruits/watermelon.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1538133258/memory-game/fruits/raspberry.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1538133258/memory-game/fruits/plum.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1538133257/memory-game/fruits/lemon.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1538133256/memory-game/fruits/grapes.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1538133256/memory-game/fruits/banana.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1538133256/memory-game/fruits/cherry.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1538133256/memory-game/fruits/avocado.svg",
    ]
  },
  {
    name: "developer",
    images: [
      "https://res.cloudinary.com/jutzee/image/upload/v1559855312/memory-game/dev/html-5.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1559855310/memory-game/dev/css.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1559855313/memory-game/dev/javascript.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1559855315/memory-game/dev/react.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1559855316/memory-game/dev/sass.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1559855317/memory-game/dev/typescript.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1559855311/memory-game/dev/github.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1559855314/memory-game/dev/nodejs.svg"
    ]
  },
  {
    name: "space",
    images: [
      "https://res.cloudinary.com/jutzee/image/upload/v1559854133/memory-game/space/space-ship.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1559854132/memory-game/space/solar-system.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1559854131/memory-game/space/saturn.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1559854130/memory-game/space/planet-earth.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1559854129/memory-game/space/jupiter.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1559854282/memory-game/space/comet-1.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1559854127/memory-game/space/venus.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1559854126/memory-game/space/ursa-major.svg"
    ]
  },
  {
    name: "dogs",
    images: [
      "https://res.cloudinary.com/jutzee/image/upload/v1561048757/memory-game/dogs/bergamasco.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1561048401/memory-game/dogs/rottweiler.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1561048401/memory-game/dogs/saint_bernard.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1561048354/memory-game/dogs/french_poodle.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1561048291/memory-game/dogs/french_bulldog.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1561048291/memory-game/dogs/008-corgi.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1561048291/memory-game/dogs/pug.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1561048291/memory-game/dogs/bulldog.svg"
    ]
  },
  {
    name: "summer",
    images: [
      "https://res.cloudinary.com/jutzee/image/upload/v1561049519/memory-game/summer/umbrella.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1561049480/memory-game/summer/sunrise.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1561049520/memory-game/summer/flip_flops.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1561050117/memory-game/summer/drink.png",
      "https://res.cloudinary.com/jutzee/image/upload/v1561049519/memory-game/summer/bikini.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1561049546/memory-game/summer/pool.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1561049546/memory-game/summer/cocktail.svg",
      "https://res.cloudinary.com/jutzee/image/upload/v1561049697/memory-game/summer/boat.png"
    ]
  }
] as Cards[];