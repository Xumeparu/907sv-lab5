import { SELECT_FILTER_TYPE, SELECT_FILTER_TYPES, IItem, Store } from './index';

export function selectByFilter(list: IItem[], filter: SELECT_FILTER_TYPE) {
  if (filter === SELECT_FILTER_TYPES.DONE) return list.filter(item => item.isChecked);
  if (filter === SELECT_FILTER_TYPES.NOT_DONE) return list.filter(item => !item.isChecked);
  return list;
}

export function selectBySearchString(list: IItem[], substring: string): IItem[] {
  if (substring === '') return list;
  return list.filter(item => item.title.toLowerCase().includes(substring.toLowerCase()));
}

export function selectFilteredList(state: Store): IItem[] {
  return selectByFilter(selectBySearchString(state.list, state.substring), state.filter);
}

export function selectItemsCount(state: Store): number {
  return selectFilteredList(state).length;
}