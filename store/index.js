import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import bannedItems from './bannedItems';
import results from './results';

const reducer = combineReducers({ bannedItems, results });
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware )
  //createLogger({ collapsed: true })
);
const store = createStore(reducer, middleware);

export default store;
