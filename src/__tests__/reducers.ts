import { State } from '../store';
import * as actions from '../store/actionCreators';
import reducer from '../store/reducers';
import { Card } from '../types';

describe('reducers', () => {
  describe('cards', () => {
    const cards = [
      { id: 7, url: ''},
      { id: 2, url: ''},
      { id: 8, url: ''},
      { id: 6, url: ''},
      { id: 6, url: ''},
      { id: 5, url: ''},
      { id: 8, url: ''},
      { id: 7, url: ''},
      { id: 3, url: ''},
      { id: 5, url: ''},
      { id: 4, url: ''},
      { id: 1, url: ''},
      { id: 3, url: ''},
      { id: 1, url: ''},
      { id: 4, url: ''},
      { id: 2, url: ''}
    ] as Card[];

    it('pushes cards into state', () => {
      const nextState = reducer(undefined, actions.resolveCards(cards));
      expect(nextState.cards).toBe(cards);
    });

    it('returns the prev state if action is not interesting', () => {
      const nextState = reducer(undefined, actions.resolveCards(cards));
      const nextNextState = reducer(nextState, { type: 'TEST' });
      expect(nextNextState.cards).toBe(nextState.cards);
    });
  });
});