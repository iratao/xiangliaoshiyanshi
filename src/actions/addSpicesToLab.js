import Action from '../constants/action';

export function addSpicesToLab(spices) {
  return {
    type: Action.ADD_SPICES_TO_LAB,
    spices,
  };
}
