'use strict';

import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import builtinMiddlewares                                         from './middlewares';
import builtinReducers                                            from '../reducers';
import { STATE_PREFIX }                                           from '../constants/defines';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store;

export function initStore(reducers, ...middlewares) {
  store = createStore(
    combineReducers({
      [STATE_PREFIX] : builtinReducers,
      ...reducers
    }),
    composeEnhancers(
      applyMiddleware(...middlewares, ...builtinMiddlewares)
    )
  );
}

export function getStore() {
  return store;
}
