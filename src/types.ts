export enum GameState {
  START = 'start',
  GAME = 'game',
  PAUSED = 'paused',
  END = 'end'
}

export type Cards = {
  name: string;
  images: string[];
  style: CardStyle;
}

export type Card = {
  cardId: number;
  imageId: number;
  status: CardStatus;
}

export enum CardStatus {
  OPEN = 'open',
  CLOSED = 'closed',
  MATCHED = 'matched'
}

export type CardStyle = {
  open: string;
  matched: string;
}