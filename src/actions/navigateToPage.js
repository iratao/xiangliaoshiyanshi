import Action from '../constants/action';

export function navigateToPage(index) {
  return {
    type: Action.NAVIGATE_TO_PAGE,
    currentRouteIndex: index,
  };
}

export function navigateToPreviousPage() {
  return {
    type: Action.NAVIGATE_TO_PREVIOUS_PAGE,
  };
}
