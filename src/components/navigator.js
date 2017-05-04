import React, { Component, PropTypes } from 'react';
import { StyleSheet, NavigationExperimental, View, TouchableOpacity, Text, Image } from 'react-native';

import PostList from './postList';
import Post from '../containers/post';
import RouteKeys from '../constants/routeKeys';
import LabButton from './labButton';
import Lab from '../containers/lab';
import LabResult from '../containers/labResult';
import NavBackButton from './backButton';

import LabBottleInactiveImage from '../res/images/labbottle_inactive.png';
import LabBottleActiveImage from '../res/images/labbottle_active.png'

const {
  CardStack: NavigationCardStack,
  Header: NavigationHeader,
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerLabIcon: {
    width: 14,
    height: 20,
    marginRight: 9,
  },
  header: {
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#FFFFFF',
  },
  titleText: {
    fontSize: 18,
    fontFamily:  'PingFang SC',
    fontWeight: 'normal',
  },
  titleTextLab: {
    fontSize: 18,
    fontFamily:  'Helvetica Neue',
    fontWeight: 'normal',
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
  addToLabButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToLabButton: {
    fontSize: 14,
    textAlign: 'center',
    color: '#000000',
    paddingRight: 10,
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
    let { posts, getPosts } = this.props;

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
            buttonText={'前往实验室'}
          />
        </View>
      );
    } else if (scene.route.key === RouteKeys.SPICE_DETAIL) {
      return (
        <Post />
      );
    } else if (scene.route.key === RouteKeys.LAB) {
      return (
        <Lab />
      );
    } else if (scene.route.key === RouteKeys.LAB_RESULT) {
      return (
        <LabResult />
      );
    }
    return null;
  }

  _renderHeader(props) {
    return (
      <NavigationHeader
        {...props}
        style={styles.header}
        onNavigateBack={this._handleBack}
        renderTitleComponent={this._renderTitleComponent}
        renderRightComponent={_props => this._renderRightComponent(_props)}
        renderLeftComponent={_props => this._renderLeftComponent(_props)}
      />
    );
  }

  _renderLeftComponent(props) {
    if (props.scene.index === 0 || !props.onNavigateBack) {
      return null;
    }
    return (
      <NavBackButton
        onPress={props.onNavigateBack}
      />
    );
  }

  _isItemInLab(itemid) {
    let { labSpices } = this.props;
    let spice = labSpices.find(mpost => mpost.id === itemid);
    return spice ? true : false;
  }

  _renderRightComponent(props) {
    let { posts, selectedItem, addToLab, deleteLabSpice } = this.props;
    let spice = posts.find(mpost => mpost.id === selectedItem);
    let isItemInLab = this._isItemInLab(selectedItem);
    const state = props.scene.route;
    if (state.key === RouteKeys.SPICE_DETAIL) {
      return (
        <TouchableOpacity
          style={styles.addToLabButtonContainer}
          onPress={() => {
            if (!isItemInLab) {
              addToLab(spice.id);
            } else {
              deleteLabSpice(spice.id);
            }

          }}
        >
          <Image style={styles.headerLabIcon} source={ isItemInLab ? LabBottleActiveImage : LabBottleInactiveImage} />
          <Text style={styles.addToLabButton}>{ isItemInLab ? '已加入' : '加入实验室'}</Text>
        </TouchableOpacity>
      );
    }
    return null;
  }

  _renderTitleComponent(props) {
    const state = props.scene.route;
    if (state.key === RouteKeys.HOME) {
      return (
        <NavigationHeader.Title
          textStyle={styles.titleText}
        >
          {'香料实验室'}
        </NavigationHeader.Title>
      );
    } else if (state.key === RouteKeys.LAB) {
      return (
        <NavigationHeader.Title
          textStyle={styles.titleTextLab}
        >
          {'LAB'}
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
  addToLab: PropTypes.func.isRequired,
  selectedItem: PropTypes.number,
  posts: PropTypes.array.isRequired,
  selectItem: PropTypes.func.isRequired,
  navigationState: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired,
  updateNavigationState: PropTypes.func.isRequired,
  labSpices: PropTypes.array.isRequired,
};
