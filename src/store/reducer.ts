import { initialState, Store } from './index';
import { ACTION_TYPES, IAction } from './actions';

export default function reducer(state: Store = initialState, action: IAction): Store {
  switch (action.type) {
    case ACTION_TYPES.ADD: {
      return { ...state, list: [...state.list, action.payload] };
    }
    case ACTION_TYPES.ADD_ALL: {
      return { ...state, list: [...action.payload] };
    }
    case ACTION_TYPES.REMOVE: {
      return { ...state, list: [...state.list.filter(item => item.id !== action.payload)] };
    }
    case ACTION_TYPES.CHECKED: {
      return {
        ...state,
        list: [
          ...state.list.map(function (item) {
            if (item.id === action.payload) {
              return { ...item, isChecked: !item.isChecked };
            }
            return item;
          })
        ]
      };
    }
    case ACTION_TYPES.EDIT: {
      return {
        ...state,
        list: [
          ...state.list.map(function (item) {
            if (item.id === action.payload.id) {
              return { ...item, title: action.payload.title };
            }
            return item;
          })
        ]
      };
    }
    case ACTION_TYPES.SELECT_BY_FILTER: {
      return { ...state, filter: action.payload };
    }
    case ACTION_TYPES.SELECT_BY_SEARCH_STRING: {
      return { ...state, substring: action.payload };
    }
    case ACTION_TYPES.SET_REQUEST_STATE: {
      return { ...state, requestState: action.payload };
    }
    case ACTION_TYPES.SET_ERROR: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
}
