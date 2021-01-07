import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducers from './reducers';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const initialState = {};

const enhancers = () => {
  if (process.env.NODE_ENV !== 'development') {
    return applyMiddleware(...middlewares);
  } else {
    return composeWithDevTools(applyMiddleware(...middlewares));
  }
};
export const store = createStore(rootReducers, initialState, enhancers());
