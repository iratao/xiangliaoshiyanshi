import { connect } from 'react-redux';
import { fetchPostsSucceeded } from '../actions/fetchPosts';
import { selectItem } from '../actions/selectItem';
import { navigateToPage, navigateToPreviousPage } from '../actions/navigateToPage';
import NavigatorApp from '../components/navigator';


const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    currentRouteIndex: state.currentRouteIndex,
    selectedItem: state.selectedItem,
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
    navigateToPage: (pageIndex) => {
      dispatch(navigateToPage(pageIndex));
    },
    navigatePreviousPage: () => {
      dispatch(navigateToPreviousPage());
    },
  };
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigatorApp);


export default App;
