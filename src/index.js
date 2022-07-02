import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';

import { addContact } from './redux/actions';
console.log(store.dispatch(addContact({ name: 'Jimm' })));
console.log(store.dispatch(addContact({ name: 'Bill' })));

console.log(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
