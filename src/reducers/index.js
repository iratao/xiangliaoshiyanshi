import { combineReducers } from 'redux';
import posts from './posts';
import selectedItem from './selectedItem';
import navigationState from './navigationState';
import routes from './routes';
import labSpices from './labSpices';

const rootReducer = combineReducers({
  posts,
  selectedItem,
  navigationState,
  routes,
  labSpices,
});

export default rootReducer;
