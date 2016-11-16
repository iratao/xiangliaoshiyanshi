import { connect } from 'react-redux';
import Post from '../components/post';


const mapStateToProps = (state) => {
  let selectedItem = state.posts.find(post => post.id === state.selectedItem);

  return {
    coverURL: selectedItem.coverURL,
    title: selectedItem.title,
    content: selectedItem.content,
  };
};

export default connect(mapStateToProps)(Post);
