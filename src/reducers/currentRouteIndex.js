import Action from '../constants/action';

function currentRouteIndex(state = 0, action) {
  switch (action.type) {
    case Action.NAVIGATE_TO_PAGE:
      return action.currentRouteIndex;
    default:
      return state;
  }
}

export default currentRouteIndex;
