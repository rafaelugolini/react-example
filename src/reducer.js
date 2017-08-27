import { combineReducers } from 'redux';

import mainReducer from './containers/main/reducer';

export default function createReducer(asyncReducers) {
  return combineReducers({
    main: mainReducer,
    ...asyncReducers,
  });
}
