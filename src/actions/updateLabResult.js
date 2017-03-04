import Action from '../constants/action';

function updateLabResult(mixedSpiceId) {
  return {
    type: Action.UPDATE_LAB_RESULT,
    {
      id: mixedSpiceId,
    },
  };
}

export default updateNavigationState;
