import { connect } from 'react-redux';

import Lab from '../components/lab';


const mapStateToProps = (state) => {
  let labSpices = [];
  if (state.labSpices && state.labSpices.length > 0) {
    labSpices = state.labSpices.map(spiceId =>
      state.posts.find(post => post.id === spiceId)
    );
  }
  return {
    labSpices,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lab);
