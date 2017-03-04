import Action from '../constants/action';

export function fetchMixedSpicesSucceeded() {
  return {
    type: Action.FETCH_MIXEDSPICES_SUCCEEDED,
    mixedSpices: {
      "1": {
        id: "1",
        name: "mixed spice",
        content: "mixed spice content",
      },
    },
  };
}
