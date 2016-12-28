import React, { Component, PropTypes } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import LabDeleteButtonImage from '../res/images/lab_delete_button.png';

const styles = StyleSheet.create({
  lab: {
    width: 20,
    height: 20,
  },
});

class LabDeleteButtonImg extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPressButton}>
        <Image source={LabDeleteButtonImage} style={styles.lab} />
      </TouchableOpacity>
    );
  }
}

LabDeleteButtonImg.propTypes = {
  onPressButton: PropTypes.func.isRequired,
};

export default LabDeleteButtonImg;
