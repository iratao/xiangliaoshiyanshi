import React, { Component, PropTypes } from 'react';
import { StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
// import ActionButton from 'react-native-action-button';
// import { RoundButton } from 'react-native-button-component';

import LabButtonImg from './labButtonImg';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 45,
    bottom: 5,
    width: SCREEN_WIDTH - 60,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#FFCD0D',
  },
  buttonText: {

  }
});

class LabButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPressButton}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{this.props.buttonText}</Text>
      </TouchableOpacity>
    );
  }
}

LabButton.propTypes = {
  onPressButton: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default LabButton;
