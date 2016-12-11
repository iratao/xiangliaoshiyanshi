import Action from '../constants/action';

function updateNavigationState(state) {
  return {
    type: Action.UPDATE_NAVIGATION_STATE,
    state,
  };
}

export default updateNavigationState;
