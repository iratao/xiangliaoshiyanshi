import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, Dimensions } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  resultCard: {
    backgroundColor: '#FDFEFE',
  },
  cover: {
    width: 105.6,
    height: 105.6,
    borderRadius: 52.8,
    marginLeft: 30,
    marginRight: 14.5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  title: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  mainTitle: {
    fontSize: 24,
    fontFamily: 'Helvetica Neue',
  },
  subTitle: {
    fontSize: 16,
    fontFamily: 'PingFang SC',
  },
  pageContentTitle: {
    fontFamily: 'PingFang SC',
    fontSize: 20,
    fontWeight: '300',
  },
  pageContentBody: {
    fontFamily: 'PingFang SC',
    fontSize: 16,
    fontWeight: '100',
  },
  lineStyle: {
    height: 1,
    backgroundColor: '#FFCD0D',
    marginTop: 6,
    marginBottom: 15,
    width: 200.85,
  },
  page: {
    backgroundColor: '#FDFEFE',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 25,
    height: SCREEN_HEIGHT,
  },
});

class LabResult extends Component {
	constructor() {
		super();
	}

	render() {
		let { labResult } = this.props;
    let result = labResult && labResult.length > 0 ? labResult[0] : {};
		return (
			<View style={styles.resultCard}>
				<View style={styles.header}>
          <Image style={styles.cover} source={{uri: result.cover}} />
          <View style={styles.title}>
            <Text style={styles.mainTitle}>{result.nameEN}</Text>
            <Text style={styles.subTitle}>{result.name}</Text>
          </View>
        </View>
        <View style={styles.page}>
          <Text style={styles.pageContentTitle}>{'简介'}</Text>
          <View style={styles.lineStyle} />
          <Text style={styles.pageContentBody}>{result.introduction}</Text>
        </View>
			</View>
		);
	}
}

LabResult.propTypes = {
  labResult: PropTypes.array.isRequired,
};

export default LabResult;

