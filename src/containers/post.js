import { connect } from 'react-redux';
import Post from '../components/post';
import { addSpicesToLab } from '../actions/addSpicesToLab';


const mapStateToProps = (state) => {
  let selectedItem = state.posts.find(post => post.id === state.selectedItem);

  if (selectedItem) {
    return {
      coverURL: selectedItem.coverThumbnail,
      title: selectedItem.name,
      id: selectedItem.id,
      genusSpecies: selectedItem.genusSpecies,
      family: selectedItem.family,
      origin: selectedItem.origin,
      cultivated: selectedItem.cultivated,
    };
  }
  return {
    coverURL: undefined,
    title: undefined,
    id: undefined,
    genusSpecies: undefined,
    family: undefined,
    origin: undefined,
    cultivated: undefined,
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
