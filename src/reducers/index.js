import { combineReducers } from 'redux';
import posts from './posts';
import selectedItem from './selectedItem';
import navigationState from './navigationState';
import routes from './routes';
import labSpices from './labSpices';
import postview from './postview';
import labResult from './labResult';
import mixedSpices from './mixedSpices';

const rootReducer = combineReducers({
  posts,
  selectedItem,
  navigationState,
  routes,
  labSpices,
  labResult,
  postview,
  mixedSpices,
});

export default rootReducer;
