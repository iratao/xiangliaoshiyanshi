import { connect } from 'react-redux';
import { fetchPostsSucceeded } from '../actions/fetchPosts';
import { deleteLabSpice } from '../actions/deleteLabSpice';
import { selectItem } from '../actions/selectItem';
import updateNavigationState from '../actions/updateNavigationState';
import { addSpicesToLab } from '../actions/addSpicesToLab';
import { clearPostView } from '../actions/updateView';

import NavigatorApp from '../components/navigator';


const mapStateToProps = (state) => {
  let labSpices = [];
  if (state.labSpices && state.labSpices.length > 0) {
    labSpices = state.labSpices.map(spiceId =>
      state.posts.find(post => post.id === spiceId)
    );
  }
  return {
    posts: state.posts,
    selectedItem: state.selectedItem,
    navigationState: state.navigationState,
    routes: state.routes,
    labSpices,
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
    deleteLabSpice: (id) => {
      dispatch(deleteLabSpice(id));
    }
  };
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigatorApp);


export default App;
