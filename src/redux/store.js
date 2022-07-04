import { configureStore, combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './contacts-reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'key',
  storage,
};
const rootReducer = combineReducers({ contacts: contactsReducer });
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});
const persistor = persistStore(store);
export { store, persistor };
