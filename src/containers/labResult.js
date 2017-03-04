import { connect } from 'react-redux';
import LabResult from '../components/labResult';


const mapStateToProps = (state) => {
  let result = undefined;
  if (state.labResult.id) {
    result = state.mixedSpices[state.labResult.id]
  }

  if (result) {
    return {
      labResult: selectedItem,
    };
  }
  return {
    selectedItem: undefined,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // addToLab: (id) => {
    //   dispatch(addSpicesToLab(id));
    // },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LabResult);
