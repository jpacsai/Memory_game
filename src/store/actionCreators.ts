import { action } from 'typesafe-actions';
import * as actionNames from './actionNames';
import { Card } from '../types';

export const resolveCards = (cards: Card[]) => action(actionNames.RESOLVE_CARDS, cards);