import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, ListView, Image, Text, Button, NavigationExperimental } from 'react-native';
import LabListItem from './labListItem';
import RouteKeys from '../constants/routeKeys';

const {
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;

const styles = StyleSheet.create({
  lab: {
    flex: 1,
  },
  lineStyle: {
    height: 1,
    backgroundColor: '#FFCD0D',
    marginLeft: 30,
    marginRight: 30,
  },
});

class Lab extends Component {
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.listDataSource = ds.cloneWithRows(props.labSpices);
    this.routes = props.routes;
  }

  componentWillReceiveProps(nextProps) {
    this.listDataSource = this.listDataSource.cloneWithRows(nextProps.labSpices);
  }

  _onDeleteItemPressed(id) {
    this.props.deleteLabSpice(id);
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

  onPressMix() {
    this.updateNavigationState(RouteKeys.LAB_RESULT, 'push');
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <LabListItem
        id={rowData.id}
        cover={rowData.cover}
        name={rowData.name}
        nameEN={rowData.nameEN}
        onDeletePressed={id => this._onDeleteItemPressed(id)}
      />
    );
  }

  renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
    let needUnderline = parseInt(rowID) === this.props.labSpices.length - 1 ? false : true;
    if (needUnderline) {
      return (
        <View
          key={`${sectionID}-${rowID}`}
          style={styles.lineStyle}
        />
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <View style={styles.lab}>
        <ListView
          contentContainerStyle={styles.list}
          dataSource={this.listDataSource}
          initialListSize={21}
          pageSize={3}
          scrollRenderAheadDistance={500}
          renderRow={(rowData, sectionID, rowID) => this.renderRow(rowData, sectionID, rowID)}
          renderSeparator={this.renderSeparator.bind(this)}
          showsVerticalScrollIndicator={false}
          endFillColor={'#FDFEFE'}
          bounces={false}
          backgroundColor={'#FDFEFE'}
        />
        <Button
          onPress={() => this.onPressMix()}
          title="Mix"
          color="#841584"
          accessibilityLabel="Mix the spices"
        />
      </View>
    );
  }
}

Lab.propTypes = {
  labSpices: PropTypes.array.isRequired,
  deleteLabSpice: PropTypes.func.isRequired,
  routes: PropTypes.object.isRequired,
  updateNavigationState: PropTypes.func.isRequired,
  navigationState: PropTypes.object.isRequired,
};

export default Lab;
