import { combineReducers } from 'redux';
import posts from './posts';
import selectedItem from './selectedItem';

const rootReducer = combineReducers({
  posts,
  selectedItem,
});

export default rootReducer;
