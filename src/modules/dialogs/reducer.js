'use strict';

import Immutable         from 'immutable';
import { handleActions } from 'redux-actions';
import actionTypes       from './action-types';

const defaultState = {
  busy          : false,
  error         : null,
  info          : null,
  notifications : new Immutable.List()
};

const others = handleActions({

  [actionTypes.ERROR_CLEAR] : state => ({
    ...state,
    error : null
  }),

  [actionTypes.INFO_SHOW] : (state, action) => ({
    ...state,
    info : action.payload
  }),

  [actionTypes.INFO_CLEAR] : state => ({
    ...state,
    info : null
  }),

  //https://gist.github.com/markerikson/7621fca0e9704e99db5598bed0db861d
  [actionTypes.NOTIFICATION_SHOW] : (state, action) => ({
    ...state,
    notifications : state.notifications.unshift(action.payload)
  }),

  [actionTypes.NOTIFICATION_DISMISS] : (state, action) => ({
    ...state,
    notifications : state.notifications.filter(n => n.id !== action.payload)
  }),

  [actionTypes.NOTIFICATION_CLEAR] : state => ({
    ...state,
    notifications : state.notifications.clear()
  }),

}, defaultState);

export default function(state = defaultState, action) {
  if(action.error) {
    return { ... state, error : action.payload };
  }

  return others(state, action);
}
