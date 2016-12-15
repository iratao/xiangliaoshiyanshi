import { connect } from 'react-redux';
import Post from '../components/post';
import { addSpicesToLab } from '../actions/addSpicesToLab';


const mapStateToProps = (state) => {
  let selectedItem = state.posts.find(post => post.id === state.selectedItem);

  if (selectedItem) {
    return {
      coverURL: selectedItem.coverThumbnail,
      title: selectedItem.name,
      content: selectedItem.name,
      id: selectedItem.id,
    };
  }
  return {
    coverURL: undefined,
    title: undefined,
    content: undefined,
    id: undefined,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToLab: (ids) => {
      dispatch(addSpicesToLab(ids));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
