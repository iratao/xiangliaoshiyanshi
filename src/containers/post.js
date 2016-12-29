import { connect } from 'react-redux';
import Post from '../components/post';
import { addSpicesToLab } from '../actions/addSpicesToLab';


const mapStateToProps = (state) => {
  let selectedItem = state.posts.find(post => post.id === state.selectedItem);

  if (selectedItem) {
    return {
      name: selectedItem.name,
      nameEN: selectedItem.nameEN,
      coverURL: selectedItem.coverThumbnail,
      content: selectedItem.introduction,
      title: selectedItem.name,
      id: selectedItem.id,
      genusSpecies: selectedItem.genusSpecies,
      family: selectedItem.family,
      origin: selectedItem.origin,
      cultivated: selectedItem.cultivated,
    };
  }
  return {
    name: undefined,
    nameEN: undefined,
    content: undefined,
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
    addToLab: (id) => {
      dispatch(addSpicesToLab(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
