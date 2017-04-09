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
    let result = labResult && labResult.length > 0 ? labResult[0] : {};
		return (
			<View>
				<ScrollView>
        <Text>{result.nameEN}</Text>
        <Text>{result.introduction}</Text>
				</ScrollView>
			</View>
		);
	}
}

LabResult.propTypes = {
  labResult: PropTypes.array.isRequired,
};

export default LabResult;

