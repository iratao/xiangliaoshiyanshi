import Action from '../constants/action';

function labSpices(state = [], action) {
  switch (action.type) {
    case Action.ADD_SPICES_TO_LAB:
      return [
        ...state,
        ...action.spices,
      ];
    default:
      return state;
  }
}

export default labSpices;
