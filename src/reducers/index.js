import { combineReducers } from 'redux';
import posts from './posts';
import selectedItem from './selectedItem';
import currentRouteIndex from './currentRouteIndex';

const rootReducer = combineReducers({
  posts,
  selectedItem,
  currentRouteIndex,
});

export default rootReducer;
