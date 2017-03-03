import React, { Component, PropTypes } from 'react';
import { StyleSheet, I18nManager, Platform, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
	buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 20,
    width: 20,
    margin: Platform.OS === 'ios' ? 10 : 16,
    resizeMode: 'contain',
    transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
  }
});

class NavBackButton extends Component {
  render() {
    return (
		<TouchableOpacity style={styles.buttonContainer} onPress={this.props.onPress}>
		  <Image style={styles.button} source={require('../res/images/back_icon.png')} />
		</TouchableOpacity>
    );
  }
}

NavBackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default NavBackButton;