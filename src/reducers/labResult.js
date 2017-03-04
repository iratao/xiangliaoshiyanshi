import Action from '../constants/action';

function labResult(state = {}, action) {
  switch (action.type) {
    case Action.UPDATE_LAB_RESULT:
      return {
        id: action.id
      };
    default:
      return state;
  }
}

export default labResult;
