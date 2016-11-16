import { connect } from 'react-redux';
import { fetchPostsSucceeded } from '../actions/fetchPosts';
import { selectItem } from '../actions/selectItem';
import NavigatorApp from '../components/navigator';


const mapStateToProps = (state) => {
  return {
    posts: state.posts,
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
  };
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigatorApp);


export default App;
