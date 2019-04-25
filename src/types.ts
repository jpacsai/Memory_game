export enum GameState {
  START = 'start',
  GAME = 'game',
  PAUSED = 'paused',
  END = 'end'
}

export type Cards = {
  name: string;
  images: string[];
}

export type Card = {
  id: number;
  url: string;
}