import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';
console.log(actions.addContact.toString());

const itemsReduser = createReducer([], {
  'CONTACT/ADD': (_, action) => action.payload,
});

export default combineReducers({ itemsReduser });
