import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from './redux/reducers/_root.reducer';
import rootSaga from './redux/sagas/_root.saga';

import AppRouter from './routers/AppRouter';

// TailwindCSS config import
import './styles/tailwind.css';


const sagaMiddleware = createSagaMiddleware();

const middlewareList = [sagaMiddleware, logger];

const store = createStore(rootReducer, applyMiddleware(...middlewareList));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);