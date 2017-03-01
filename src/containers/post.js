import { connect } from 'react-redux';
import Post from '../components/post';
import { addSpicesToLab } from '../actions/addSpicesToLab';
import { updatePostTitle, updatePostSubtitle, clearPostView } from '../actions/updateView';


const mapStateToProps = (state) => {
  let selectedItem = state.posts.find(post => post.id === state.selectedItem);

  if (selectedItem) {
    return {
      selectedItem,
      postview: state.postview,
    };
  }
  return {
    selectedItem: undefined,
    postview: undefined,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToLab: (id) => {
      dispatch(addSpicesToLab(id));
    },
    updatePostTitle: (title) => {
      dispatch(updatePostTitle(title));
    },
    updatePostSubtitle: (subtitle) => {
      dispatch(updatePostSubtitle(subtitle));
    },
    clearPostView: () => {
      dispatch(clearPostView());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
