import Action from '../constants/action';

function mixedSpices(state = {}, action) {
  switch (action.type) {
    case Action.FETCH_MIXEDSPICES_SUCCEEDED:
      return action.mixedSpices;
    default:
      return state;
  }
}

export default mixedSpices;
