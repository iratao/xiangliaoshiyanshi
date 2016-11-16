
import React, { Component, PropTypes } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

export default class TestScene extends Component {
  render() {
    return (
      <View>
        <Text>Current Scene: { this.props.title }</Text>
        <TouchableHighlight>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

TestScene.propTypes = {
  title: PropTypes.string.isRequired,
};
