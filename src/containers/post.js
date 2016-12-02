import { connect } from 'react-redux';
import Post from '../components/post';


const mapStateToProps = (state) => {
  let selectedItem = state.posts.find(post => post.id === state.selectedItem);

  if (selectedItem) {
    return {
      coverURL: selectedItem.coverThumbnail,
      title: selectedItem.name,
      content: selectedItem.name,
    };
  }
  return {
    coverURL: undefined,
    title: undefined,
    content: undefined,
  };
};

export default connect(mapStateToProps)(Post);
