import React, { Component, PropTypes } from 'react';
import { Navigator, StyleSheet, NavigationExperimental } from 'react-native';
import PostList from './postList';
import Post from '../containers/post';
import RouteKeys from '../constants/routeKeys';

const {
  CardStack: NavigationCardStack,
  Header: NavigationHeader,
  StateUtils: NavigationStateUtils,
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
    this.routes = props.routes;
    this._renderHeader = this._renderHeader.bind(this);
    this._renderScene = this._renderScene.bind(this);
    this._renderTitleComponent = this._renderTitleComponent.bind(this);
    this.showItemPage = this.showItemPage.bind(this);
  }

  componentWillMount() {

  }

  updateNavigationState(routeKey, action) {
    let currentNavigationState = this.props.navigationState;
    let route = this.routes[routeKey];
    let navAction;
    switch (action) {
      case 'pop':
        navAction = 'pop';
        break;
      case 'push':
        navAction = 'push';
        break;
      default:
        navAction = undefined;
    }

    if (!navAction) {
      return;
    }

    const nextState = NavigationStateUtils[navAction](currentNavigationState, route);
    if (nextState !== currentNavigationState) {
      this.props.updateNavigationState(nextState);
    }
  }

  showItemPage(id) {
    this.props.selectItem(id);
    this.updateNavigationState(RouteKeys.SPICE_DETAIL, 'push');
  }

  configureScene() {
    return Navigator.SceneConfigs.FloatFromBottom;
  }

  _handleBack() {
    this.updateNavigationState(RouteKeys.HOME, 'pop');
  }

  _renderScene(props) {
    const scene = props.scene;
    let { posts, getPosts, selectedItem } = this.props;

    if (scene.route.key === RouteKeys.HOME) {
      return (
        <PostList
          posts={posts}
          getPosts={getPosts}
          onItemPressed={this.showItemPage}
        />
      );
    } else if (scene.route.key === RouteKeys.SPICE_DETAIL) {
      let post = posts.find(mpost => mpost.id === selectedItem);
      return (
        <Post
          coverURL={post.cover}
          name={post.name}
          nameEN={post.nameEN}
          content={post.introduction}
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
    if (state.key === RouteKeys.HOME) {
      return (
        <NavigationHeader.Title>
          {'香料实验室'}
        </NavigationHeader.Title>
      );
    }
    return null;
  }

  render() {
    const { navigationState } = this.props;
    return (
      <NavigationCardStack
        navigationState={navigationState}
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
  navigationState: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired,
  updateNavigationState: PropTypes.func.isRequired,
};
