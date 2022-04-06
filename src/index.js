import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/reducers/rootReducer'
import { composeWithDevTools } from '@redux-devtools/extension';
import getInitState, { LOCAL_STORAGE_KEY } from './redux/state';

const store = createStore(rootReducer, getInitState(), composeWithDevTools())

store.subscribe(() => {
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(store.getState()))
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


