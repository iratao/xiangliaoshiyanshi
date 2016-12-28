import Action from '../constants/action';

export function deleteLabSpice(id) {
  return {
    type: Action.DELETE_LAB_SPICE,
    id,
  };
}
