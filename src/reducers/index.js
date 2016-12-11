import { combineReducers } from 'redux';
import posts from './posts';
import selectedItem from './selectedItem';
import navigationState from './navigationState';
import routes from './routes';

const rootReducer = combineReducers({
  posts,
  selectedItem,
  navigationState,
  routes,
});

export default rootReducer;
