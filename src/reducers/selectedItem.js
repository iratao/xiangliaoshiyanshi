import Action from '../constants/action';

function selectedItem(state = 0, action) {
  switch (action.type) {
    case Action.SELECT_ITEM:
      return action.selectedItem;
    default:
      return state;
  }
}

export default selectedItem;
