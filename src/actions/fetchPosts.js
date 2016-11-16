import Action from '../constants/action';

export function fetchPostsSucceeded() {
  return {
    type: Action.FETCH_POSTS_SUCCEEDED,
    posts: [
      {
        id: '1',
        title: 'title',
        content: 'content',
        coverURL: require('../res/images/cover.jpg'),
      },
      {
        id: '2',
        title: 'title2',
        content: 'content2',
        coverURL: require('../res/images/cover.jpg'),
      },
    ],
  };
}
