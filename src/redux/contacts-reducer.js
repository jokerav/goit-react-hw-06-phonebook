import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const items = createReducer([], {
  'CONTACT/ADD': (state, { payload }) => [...state, payload],
  'CONTACT/DELETE': (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const filter = createReducer('', {
  'FILTER/CHANGE': (state, { payload }) => payload,
});

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case 'CONTACT/ADD':
//       return [...state, payload];
//     case 'CONTACT/DELETE':
//       return state.filter(({ id }) => id !== payload);
//     default:
//       return state;
//   }
// };
// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case 'FILTER/CHANGE':
//       return payload;
//     default:
//       return state;
//   }
// };
export default combineReducers({ items, filter });
