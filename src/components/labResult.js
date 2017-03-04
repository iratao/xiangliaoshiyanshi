import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';

const styles = StyleSheet.create({
});

class LabResult extends Component {
	constructor() {
		super();
	}

	render() {
		let { labResult } = this.props;
		return (
			<View>
				<ScrollView>
        <Text>The Lab Result</Text>
				</ScrollView>
			</View>
		);
	}
}

LabResult.propTypes = {
  labResult: PropTypes.object.isRequired,
};

export default LabResult;

