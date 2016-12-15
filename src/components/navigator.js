import React, { Component, PropTypes } from 'react';
import { StyleSheet, NavigationExperimental, View, Image } from 'react-native';

import PostList from './postList';
import Post from '../containers/post';
import RouteKeys from '../constants/routeKeys';
import LabButton from './labButton';
import Lab from '../containers/lab';

const {
  CardStack: NavigationCardStack,
  Header: NavigationHeader,
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  postList: {
    flex: 1,
  },
  navigator: {
    flex: 1,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'yellow',
  },
});

export default class NavigatorApp extends Component {
  constructor(props) {
    super(props);
    this.routes = props.routes;
    this._renderHeader = this._renderHeader.bind(this);
    this._renderScene = this._renderScene.bind(this);
    this._renderTitleComponent = this._renderTitleComponent.bind(this);
    this._handleBack = this._handleBack.bind(this);
    this._showItemPage = this._showItemPage.bind(this);
    this._onLabButtonPressed = this._onLabButtonPressed.bind(this);
  }

  componentWillMount() {

  }

  updateNavigationState(routeKey, action) {
    let currentNavigationState = this.props.navigationState;
    let route = this.routes[routeKey];
    let nextState;

    switch (action) {
      case 'pop':
        nextState = NavigationStateUtils.pop(currentNavigationState);
        break;
      case 'push':
        nextState = NavigationStateUtils.push(currentNavigationState, route);
        break;
      default:
        nextState = undefined;
    }

    if (!nextState) {
      return;
    }

    if (nextState !== currentNavigationState) {
      this.props.updateNavigationState(nextState);
    }
  }

  _showItemPage(id) {
    this.props.selectItem(id);
    this.updateNavigationState(RouteKeys.SPICE_DETAIL, 'push');
  }

  _onLabButtonPressed() {
    this.updateNavigationState(RouteKeys.LAB, 'push');
  }

  _handleBack() {
    this.updateNavigationState(RouteKeys.HOME, 'pop');
  }

  _renderScene(props) {
    const scene = props.scene;
    let { posts, getPosts, selectedItem } = this.props;

    if (scene.route.key === RouteKeys.HOME) {
      return (
        <View style={styles.postList}>
          <PostList
            posts={posts}
            getPosts={getPosts}
            onItemPressed={this._showItemPage}
          />
          <LabButton
            onPressButton={this._onLabButtonPressed}
          />
        </View>
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
    } else if (scene.route.key === RouteKeys.LAB) {
      return (
        <Lab />
      );
    }
    return null;
  }

  _renderHeader(props) {
    return (
      <NavigationHeader
        {...props}
        onNavigateBack={this._handleBack}
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
      <View style={styles.navigator}>
        <NavigationCardStack
          onNavigateBack={this._handleBack}
          navigationState={navigationState}
          style={styles.container}
          renderHeader={this._renderHeader}
          renderScene={this._renderScene}
          gestureResponseDistance={100}
        />
      </View>
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
