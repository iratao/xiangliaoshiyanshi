import Action from '../constants/action';

function labSpices(state = [], action) {
  switch (action.type) {
    case Action.ADD_SPICES_TO_LAB:
      if (state.some((id => id === action.id))) {
        return state;
      } else {
        return [
          ...state,
          action.id,
        ];
      }
    case Action.DELETE_LAB_SPICE: {
      const targetID = action.id;
      return state.filter(id => id !== targetID);
    }
    default:
      return state;
  }
}

export default labSpices;
