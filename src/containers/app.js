import { connect } from 'react-redux';
import { fetchPostsSucceeded } from '../actions/fetchPosts';
import { selectItem } from '../actions/selectItem';
import updateNavigationState from '../actions/updateNavigationState';
import { addSpicesToLab } from '../actions/addSpicesToLab';

import NavigatorApp from '../components/navigator';


const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    selectedItem: state.selectedItem,
    navigationState: state.navigationState,
    routes: state.routes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => {
      dispatch(fetchPostsSucceeded());
    },
    selectItem: (index) => {
      dispatch(selectItem(index));
    },
    updateNavigationState: (state) => {
      dispatch(updateNavigationState(state));
    },
    addToLab: (id) => {
      dispatch(addSpicesToLab(id));
    },
  };
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigatorApp);


export default App;
