import { connect } from 'react-redux';
import Post from '../components/post';
import { addSpicesToLab } from '../actions/addSpicesToLab';
import { updatePostTitle, updatePostSubtitle, clearPostView } from '../actions/updateView';


const mapStateToProps = (state) => {
  let selectedItem = state.posts.find(post => post.id === state.selectedItem);

  if (selectedItem) {
    return {
      name: selectedItem.name,
      nameEN: selectedItem.nameEN,
      coverURL: selectedItem.coverThumbnail,
      title: selectedItem.name,
      id: selectedItem.id,
      genusSpecies: selectedItem.genusSpecies,
      family: selectedItem.family,
      origin: selectedItem.origin,
      cultivated: selectedItem.cultivated,
      content: selectedItem.introduction,
      usefulParts: selectedItem.usefulParts,
      medicalProperties: selectedItem.medicalProperties,
      postview: state.postview,
    };
  }
  return {
    name: undefined,
    nameEN: undefined,
    coverURL: undefined,
    title: undefined,
    id: undefined,
    genusSpecies: undefined,
    family: undefined,
    origin: undefined,
    cultivated: undefined,
    content: undefined,
    usefulParts: undefined,
    medicalProperties: undefined,
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
