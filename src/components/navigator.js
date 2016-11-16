import React, { Component, PropTypes } from 'react';
import { Navigator } from 'react-native';
import PostList from './postList';
import Post from '../containers/post';

export default class NavigatorApp extends Component {
  constructor(props) {
    super(props);
    this.routes = [
      { title: 'posts', index: 0 },
      { title: 'post', index: 1 },
    ];
    this.renderScene = this.renderScene.bind(this);
    this.showItemPage = this.showItemPage.bind(this);
  }

  showItemPage(id) {
    this.props.selectItem(id);
    this.refs.nav.push(this.routes[1]);
  }

  renderScene(route, navigator) {
    let { posts, getPosts } = this.props;

    if (route.index === 0) {
      return (
        <PostList
          posts={posts}
          getPosts={getPosts}
          onItemPressed={this.showItemPage}
        />
      );
    } else if (route.index === 1) {
      return (
        <Post />
      );
    }
    return (
      <Post />
    );
  }

  render() {
    return (
      <Navigator
        ref="nav"
        initialRoute={this.routes[0]}
        renderScene={this.renderScene}
        tyle={{ flex: 1 }}
      />
    );
  }
}

NavigatorApp.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  selectItem: PropTypes.func.isRequired,
};
