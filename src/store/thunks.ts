import { Action } from 'redux';
import { ExtraArguments, State } from './';

export type Thunk = (
  dispatch: (action: Action | Thunk) => any,
  getState: () => State,
  extraArguments: ExtraArguments
) => any;