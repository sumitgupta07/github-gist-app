import {combineReducers} from 'redux';
import allGistsReducer from './allGists';
import gistForksReducer from './gistForks';

export default combineReducers({
  allGists: allGistsReducer,
  gistForks: gistForksReducer,
});
