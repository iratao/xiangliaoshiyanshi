import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import LabButtonImage from '../res/images/labbutton.png';

const styles = StyleSheet.create({
  lab: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});

class LabButtonImg extends Component {
  render() {
    return (
      <Image source={LabButtonImage} style={styles.lab} />
    );
  }
}

export default LabButtonImg;
