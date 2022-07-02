import { combineReducers } from 'redux';

const items = (state = [], action) => {
  switch (action.type) {
    case 'CONTACT/ADD':
      return [...state, action.payload];
    default:
      return state;
  }
};
const filter = (state = '', action) => {
  return state;
};
export default combineReducers({ items, filter });
