import React, { Component, PropTypes } from 'react';
import { Navigator, StyleSheet, NavigationExperimental } from 'react-native';
import PostList from './postList';
import Post from '../containers/post';
import RouteKeys from '../constants/routeKeys';

const {
  CardStack: NavigationCardStack,
  Header: NavigationHeader,
} = NavigationExperimental;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  exampleContainer: {
    flex: 1,
  },
});

export default class NavigatorApp extends Component {
  constructor(props) {
    super(props);
    this.routes = [
      { key: RouteKeys.POSTS },
      { key: RouteKeys.POST },
    ];
  }

  componentWillMount() {
    this._renderHeader = this._renderHeader.bind(this);
    this._renderScene = this._renderScene.bind(this);
    this._renderTitleComponent = this._renderTitleComponent.bind(this);
    this.showItemPage = this.showItemPage.bind(this);
  }

  showItemPage(id) {
    this.props.selectItem(id);
    this.props.navigateToPage(1);
  }

  configureScene() {
    return Navigator.SceneConfigs.FloatFromBottom;
  }

  _handleBack() {
    this.props.navigateToPage(0);
  }

  _renderScene(props) {
    const state = props.navigationState.routes[props.navigationState.index];
    let { posts, getPosts, selectedItem } = this.props;

    if (state.key === RouteKeys.POSTS) {
      return (
        <PostList
          posts={posts}
          getPosts={getPosts}
          onItemPressed={this.showItemPage}
        />
      );
    } else if (state.key === RouteKeys.POST) {
      let post = posts.find(mpost => mpost.id === selectedItem);
      return (
        <Post
          coverURL={post.coverThumbnail}
          title={post.name}
          content={post.name}
        />
      );
    }
    return null;
  }

  _renderHeader(props) {
    return (
      <NavigationHeader
        {...props}
        onNavigateBack={() => this._handleBack()}
        renderTitleComponent={this._renderTitleComponent}
      />
    );
  }

  _renderTitleComponent(props) {
    const state = props.scene.route;
    if (state.key === RouteKeys.POSTS) {
      return (
        <NavigationHeader.Title>
          {'香料实验室'}
        </NavigationHeader.Title>
      );
    }
    return null;
  }

  render() {
    return (
      <NavigationCardStack
        navigationState={{
          index: this.props.currentRouteIndex,
          routes: this.routes,
        }}
        style={styles.container}
        renderHeader={this._renderHeader}
        renderScene={this._renderScene}
      />
    );
  }
}

NavigatorApp.propTypes = {
  getPosts: PropTypes.func.isRequired,
  selectedItem: PropTypes.number,
  posts: PropTypes.array.isRequired,
  selectItem: PropTypes.func.isRequired,
  currentRouteIndex: PropTypes.number.isRequired,
  navigateToPage: PropTypes.func.isRequired,
  navigatePreviousPage: PropTypes.func.isRequired,
};
