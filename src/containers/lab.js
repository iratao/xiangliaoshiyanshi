import { connect } from 'react-redux';
import { deleteLabSpice } from '../actions/deleteLabSpice';
import Lab from '../components/lab';
import updateNavigationState from '../actions/updateNavigationState';


const mapStateToProps = (state) => {
  let labSpices = [];
  if (state.labSpices && state.labSpices.length > 0) {
    labSpices = state.labSpices.map(spiceId =>
      state.posts.find(post => post.id === spiceId)
    );
  }
  return {
    labSpices,
    navigationState: state.navigationState,
    routes: state.routes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteLabSpice: (id) => {
      dispatch(deleteLabSpice(id));
    },
    updateNavigationState: (state) => {
      dispatch(updateNavigationState(state));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lab);
