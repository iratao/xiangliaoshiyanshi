import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, Animated, Easing, Image, Button, ScrollView, Dimensions, Platform } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const NAVBAR_HEIGHT = Platform.OS === 'ios'? 64 : 54;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FDFEFE',
    height: SCREEN_HEIGHT - NAVBAR_HEIGHT - 440,
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FDFEFE',
    height: 440,
  },
  cover: {
    position: 'absolute',
    width: SCREEN_WIDTH,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  page: {
    backgroundColor: '#FDFEFE',
    height: SCREEN_HEIGHT - NAVBAR_HEIGHT,
  },
  coverImage: {
    width: 264,
    height: 264,
    borderRadius: 132,
  },
  title: {
    paddingTop: 20,
    paddingBottom: 8,
    fontSize: 36,
    fontWeight: '100',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '100',
    paddingBottom: 30,
  },
  label: {
    fontWeight: 'bold',
    textAlign: 'left',
    flex: 0.35,
    paddingLeft: 30,
  },
  labelContent: {
    textAlign: 'right',
    flex: 0.65,
    paddingRight: 30,
  },
  labelView: {
    height: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  labelViewContainer: {
    paddingTop: 0,
    paddingBottom: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});

class Post extends Component {
  constructor() {
    super();
    this.scaleValue = new Animated.Value(1);
    this.scrollY = new Animated.Value(0);
  }
  componentDidMount() {
    // this.scale();
  }

  scale() {
    this.scaleValue.setValue(1);
    Animated.timing(
      this.scaleValue,
      {
        toValue: 0.4,
        duration: 4000,
        easing: Easing.linear,
      }
    ).start();
  }

  render() {
    let { coverURL, name, nameEN, genusSpecies, family, origin, cultivated, content, usefulParts, medicalProperties } = this.props;
    let genusSpeciesLabel = 'Genus Species';
    let familyLabel = 'Family';
    let originLabel = 'Origin';
    let cultivatedLabel = 'Cultivated';

    return (
      <View>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          pagingEnabled={true}
          onScroll={Animated.event(
            // scrollX = e.nativeEvent.contentOffset.x
            [{ nativeEvent: { contentOffset: { y: this.scrollY }}}]
          )}
          scrollEventThrottle={10}
        >
          <View style={styles.header}>
            <View style={styles.cover}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.subtitle}>{nameEN}</Text>
            </View>
            <Animated.Image
              style={{
                position: 'absolute',
                top: 130,
                left: SCREEN_WIDTH / 2 - 132,
                width: 264,
                height: 264,
                borderRadius: 132,
                transform: [{
                  scale: this.scrollY.interpolate({
                    inputRange: [-9999, 0, 100, 9999],
                    outputRange: [1, 1, 0.4, 0.4],
                  }),
                }],
              }}
              source={{ uri: coverURL }}
            />
          </View>
          <View style={styles.home}>
            <View style={styles.labelViewContainer}>
              <View style={styles.labelView}><Text style={styles.label}>{genusSpeciesLabel}:</Text><Text style={styles.labelContent}>{genusSpecies}</Text></View>
              <View style={styles.labelView}><Text style={styles.label}>{familyLabel}:</Text><Text style={styles.labelContent}>{family}</Text></View>
              <View style={styles.labelView}><Text style={styles.label}>{originLabel}:</Text><Text style={styles.labelContent}>{origin}</Text></View>
            </View>
          </View>
          <View style={styles.page}>
            <Text>{'INTRODUCTION'}</Text>
            <Text>{content}</Text>
          </View>
          <View style={styles.page}>
            <Text>{'MEDICAL PROPERTIES'}</Text>
            <Text>{medicalProperties}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  coverURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nameEN: PropTypes.string.isRequired,
  genusSpecies: PropTypes.string,
  family: PropTypes.string,
  origin: PropTypes.string,
  cultivated: PropTypes.string,
  content: PropTypes.string.isRequired,
  usefulParts: PropTypes.string,
  medicalProperties: PropTypes.string,
  addToLab: PropTypes.func.isRequired,
};

export default Post;
