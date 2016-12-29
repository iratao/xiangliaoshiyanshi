import Action from '../constants/action';

export function addSpicesToLab(id) {
  return {
    type: Action.ADD_SPICES_TO_LAB,
    id,
  };
}
