import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { loadingBarReducer } from 'react-redux-loading-bar';

const rootReducer = combineReducers({
  routerReducer,
  loadingBar: loadingBarReducer,
});

export default rootReducer;
