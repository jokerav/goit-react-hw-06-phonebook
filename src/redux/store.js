import { configureStore } from '@reduxjs/toolkit';
import itemsReduser from './reducer';
const store = configureStore({
  reducer: {
    contacts: {
      items: itemsReduser,
      //   filter: filter,
    },
  },
});
export default store;
