import Action from '../constants/action';

function posts(state = [], action) {
  switch (action.type) {
    case Action.FETCH_POSTS_SUCCEEDED:
      return action.posts;
    default:
      return state;
  }
}

export default posts;
