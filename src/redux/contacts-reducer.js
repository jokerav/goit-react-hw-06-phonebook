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
const filter = (state = '', action) => {
  return state;
};
export default combineReducers({ items, filter });
