import { combineReducers } from 'redux';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case 'CONTACT/ADD':
      return [...state, payload];
    case 'CONTACT/DELETE':
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};
const filter = (state = '', { type, payload }) => {
  switch (type) {
    case 'FILTER/CHANGE':
      return payload;
    default:
      return state;
  }
};
export default combineReducers({ items, filter });
