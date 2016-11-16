import Action from '../constants/action';

function selectedItem(state = [], action) {
  switch (action.type) {
    case Action.SELECT_ITEM:
      return action.selectedItem;
    default:
      return state;
  }
}

export default selectedItem;
