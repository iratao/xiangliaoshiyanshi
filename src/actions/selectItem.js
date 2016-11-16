import Action from '../constants/action';

export function selectItem(id) {
  return {
    type: Action.SELECT_ITEM,
    selectedItem: id,
  };
}
