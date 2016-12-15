import React, { Component, PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import ActionButton from 'react-native-action-button';

import LabButtonImg from './labButtonImg';

const styles = StyleSheet.create({
});

class LabButton extends Component {
  render() {
    return (
      <ActionButton
        icon={<LabButtonImg />}
        onPress={this.props.onPressButton}
      />
    );
  }
}

LabButton.propTypes = {
  onPressButton: PropTypes.func.isRequired,
};

export default LabButton;
