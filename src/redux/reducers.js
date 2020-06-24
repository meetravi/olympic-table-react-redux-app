import { combineReducers } from 'redux';
import app from './app';

export default function createReducer() {
  return combineReducers({
    app: app,
  });
}
