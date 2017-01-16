import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, Animated, PanResponder, ScrollView, Dimensions, Platform } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const NAVBAR_HEIGHT = Platform.OS === 'ios'? 64 : 54;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 130 : 143;
const HEADER_MAX_HEIGHT = SCREEN_HEIGHT - NAVBAR_HEIGHT;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#FDFEFE',
  },

  home: {
    marginTop: 440,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FDFEFE',
    height: SCREEN_HEIGHT - NAVBAR_HEIGHT - 440,
  },
  header: {
    position: 'absolute',
    width: SCREEN_WIDTH,
    backgroundColor: '#FDFEFE',
    zIndex: 200,
  },
  cover: {
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  page: {
    backgroundColor: '#FDFEFE',
    height: SCREEN_HEIGHT - NAVBAR_HEIGHT - HEADER_MIN_HEIGHT,
  },
  coverImage: {
    width: 264,
    height: 264,
    borderRadius: 132,
  },
  title: {
    paddingTop: 20,
    paddingBottom: 8,
    fontWeight: '100',
  },
  subtitle: {
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
    this.scrollY = new Animated.Value(0);
    this.panY = new Animated.Value(0);
    this.accumulatedPanY = 0;
  }

  componentDidMount() {
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
      onPanResponderMove: this._handlePanResponderMove.bind(this),
      onPanResponderRelease: this._handlePanResponderRelease.bind(this),
    });
  }

  _handleStartShouldSetPanResponder(e, gestureState) {
    // Should we become active when the user presses down on the view?
    return true;
  }

  _handleMoveShouldSetPanResponder(e, gestureState) {
    // Should we become active when the user moves a touch over the circle?
    return true;
  }

  _handlePanResponderRelease(e, gestureState) {
    if (gestureState.dy <= -HEADER_SCROLL_DISTANCE / 4) {
      this.accumulatedPanY = -HEADER_SCROLL_DISTANCE;
    } else{
      this.accumulatedPanY = 0;
    }

    Animated.event([
      null,                // raw event arg ignored
      { dy: this.panY },
    ])(e, { dx: gestureState.dx, dy: this.accumulatedPanY });
  }

  _handlePanResponderMove(e, gestureState) {
    let dy = this.accumulatedPanY + gestureState.dy;

    Animated.event([
      null,                // raw event arg ignored
      { dy: this.panY },
    ])(e, { dx: gestureState.dx, dy });
  }

  _handleScrollViewOnScroll(e) {
    let dy = e.nativeEvent.contentOffset.y;
    if (dy < -20) {
      this.accumulatedPanY = 0;
      Animated.spring(
        this.panY,         // Auto-multiplexed
        { toValue: this.accumulatedPanY } // Back to zero
      ).start();
    }
  }

  render() {
    let { coverURL, name, nameEN, genusSpecies, family, origin, cultivated, content, usefulParts, medicalProperties } = this.props;
    let genusSpeciesLabel = 'Genus Species';
    let familyLabel = 'Family';
    let originLabel = 'Origin';
    let cultivatedLabel = 'Cultivated';

    let animHeaderHeight = this.panY.interpolate({
      inputRange: [-HEADER_SCROLL_DISTANCE, 0],
      outputRange: [HEADER_MIN_HEIGHT, HEADER_MAX_HEIGHT],
      extrapolate: 'clamp',
    });

    let topOffset = this.panY.interpolate({
      inputRange: [-HEADER_SCROLL_DISTANCE, 0],
      outputRange: [-65, 130],
      extrapolate: 'clamp',
    });

    let leftOffset = this.panY.interpolate({
      inputRange: [-HEADER_SCROLL_DISTANCE, 0],
      outputRange: [-50, SCREEN_WIDTH / 2 - 132],
      extrapolate: 'clamp',
    });

    let scaleAnim = this.panY.interpolate({
      inputRange: [-HEADER_SCROLL_DISTANCE, 0],
      outputRange: [0.4, 1],
      extrapolate: 'clamp',
    });

    return (
      <View
      >
        <Animated.View
          ref={comp => this._headerView = comp}
          style={{ height: animHeaderHeight }}
          {...this._panResponder.panHandlers}
        >
          <Animated.View
            style={[styles.header]}
          >
            <Animated.View style={[styles.cover, { width: SCREEN_WIDTH }]}>
              <Animated.Text style={[styles.title, { fontSize: 36 }]}>{name}</Animated.Text>
              <Animated.Text style={[styles.subtitle, { fontSize: 20 }]}>{nameEN}</Animated.Text>
            </Animated.View>
            <Animated.Image
              style={{
                position: 'absolute',
                top: topOffset,
                left: leftOffset,
                width: 264,
                height: 264,
                borderRadius: 132,
                transform: [{
                  scale: scaleAnim,
                }],
              }}
              source={{ uri: coverURL }}
            />
          </Animated.View>
          <View style={styles.home}>
            <View style={styles.labelViewContainer}>
              <View style={styles.labelView}><Text style={styles.label}>{genusSpeciesLabel}:</Text><Text style={styles.labelContent}>{genusSpecies}</Text></View>
              <View style={styles.labelView}><Text style={styles.label}>{familyLabel}:</Text><Text style={styles.labelContent}>{family}</Text></View>
              <View style={styles.labelView}><Text style={styles.label}>{originLabel}:</Text><Text style={styles.labelContent}>{origin}</Text></View>
            </View>
          </View>
        </Animated.View>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          pagingEnabled={true}
          showsVerticalScrollIndicator={false}
          onScroll={(e) => this._handleScrollViewOnScroll(e)}
          scrollEventThrottle={12}
          endFillColor={'#ffffff'}
        >
          <Animated.View style={styles.page}>
            <Text>{'INTRODUCTION'}</Text>
            <Text>{content}</Text>
          </Animated.View>
          <Animated.View style={styles.page}>
            <Text>{'MEDICAL PROPERTIES'}</Text>
            <Text>{medicalProperties}</Text>
          </Animated.View>
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
