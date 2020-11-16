import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import rootReducer from './redux/reducers/_root.reducer';

import AppRouter from './routers/AppRouter';

// TailwindCSS config import
import './styles/tailwind.css';

const middlewareList = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewareList));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);