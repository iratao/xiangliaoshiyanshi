import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, TouchableHighlight, Image } from 'react-native';
import LabButtonImage from '../res/images/labbutton.png';
const styles = StyleSheet.create({
  lab: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});

class LabButton extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPressButton}>
        <Image source={LabButtonImage} style={styles.lab}/>
      </TouchableHighlight>
    );
  }
}

LabButton.propTypes = {
  onPressButton: PropTypes.func.isRequired,
};

export default LabButton;
