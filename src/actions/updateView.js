import Action from '../constants/action';

export function updatePostTitle(title) {
  return {
    type: Action.UPDATE_POST_TITLE,
    title,
  };
}

export function updatePostSubtitle(subtitle) {
  return {
    type: Action.UPDATE_POST_SUBTITLE,
    subtitle,
  };
}

export function clearPostView() {
  return {
    type: Action.CLEAR_POST_VIEW,
  };
}
