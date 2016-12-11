import Action from '../constants/action';

function navigationState(state = {}, action) {
  switch (action.type) {
    case Action.UPDATE_NAVIGATION_STATE:
      return action.state;
    default:
      return state;
  }
}

export default navigationState;

