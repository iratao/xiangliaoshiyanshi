import Action from '../constants/action';

function postview(state = {
  initialTitleLeft: 0,
  initialSubtitleLeft: 0,
}, action) {
  switch (action.type) {
    case Action.UPDATE_POST_TITLE:
      return Object.assign({}, state, {
        initialTitleLeft: action.title.initialTitleLeft,
      });
    case Action.UPDATE_POST_SUBTITLE:
      return Object.assign({}, state, {
        initialSubtitleLeft: action.subtitle.initialSubtitleLeft,
      });
    case Action.CLEAR_POST_VIEW:
      return {
        initialTitleLeft: 0,
        initialSubtitleLeft: 0,
      };
    default:
      return state;
  }
}

export default postview;

