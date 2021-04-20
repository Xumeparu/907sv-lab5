import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';

export const SELECT_FILTER_TYPES = {
  ALL: 'Все',
  DONE: 'Выполненные',
  NOT_DONE: 'Не выполненные'
} as const;

export type SELECT_FILTER_TYPE =
  | typeof SELECT_FILTER_TYPES.ALL
  | typeof SELECT_FILTER_TYPES.DONE
  | typeof SELECT_FILTER_TYPES.NOT_DONE;

export enum REQUEST_STATE_TYPES {
  IDLE,
  LOADING,
  SUCCESS,
  ERROR
}

export interface IItem {
  id: string;
  title: string;
  isChecked: boolean;
}

export type Store = {
  list: IItem[];
  filter: SELECT_FILTER_TYPE;
  substring: string;
  requestState: REQUEST_STATE_TYPES;
  error: string;
};

export const initialState = {
  list: [],
  filter: SELECT_FILTER_TYPES.ALL,
  substring: '',
  requestState: REQUEST_STATE_TYPES.IDLE,
  error: ''
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export type AppDispatch = typeof store.dispatch;
export default store;
