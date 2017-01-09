import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, Animated, Easing, Image, Button, ScrollView, Dimensions, Platform } from 'react-native';

const HOME_HEIGHT = 150;
const HEADER_COVER_WIDTH = 264;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const NAVBAR_HEIGHT = Platform.OS === 'ios'? 64 : 54;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 130 : 143;
const HEADER_MAX_HEIGHT = SCREEN_HEIGHT - NAVBAR_HEIGHT - HOME_HEIGHT;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#FDFEFE',
  },
  home: {
    marginTop: HEADER_MAX_HEIGHT,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FDFEFE',
    height: HOME_HEIGHT,
  },
  header: {
    position: 'absolute',
    width: SCREEN_WIDTH,
    backgroundColor: '#FDFEFE',
    zIndex: 200,
  },
  cover: {
    position: 'absolute',
    width: SCREEN_WIDTH,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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
  }

  componentWillMount() {
    this.props.clearPostView();
  }

  componentDidMount() {
  }

  onTitleLayout(event) {
    if (this.props.postview.initialTitleLeft === 0) {
      this.props.updatePostTitle({
        initialTitleLeft: (SCREEN_WIDTH - event.nativeEvent.layout.width) / 2,
      });
    }
  }

  onSubtitleLayout(event) {
    if (this.props.postview.initialSubtitleLeft === 0) {
      this.props.updatePostSubtitle({
        initialSubtitleLeft: (SCREEN_WIDTH - event.nativeEvent.layout.width) / 2,
      });
    }
  }

  render() {
    let { coverURL, name, nameEN, genusSpecies, family, origin, content, medicalProperties } = this.props;
    let genusSpeciesLabel = 'Genus Species';
    let familyLabel = 'Family';
    let originLabel = 'Origin';

    let topOffset = this.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [130, -65],
      extrapolate: 'clamp',
    });

    let leftOffset = this.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [SCREEN_WIDTH / 2 - 132, -50],
      extrapolate: 'clamp',
    });

    let scaleAnim = this.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 0.4],
      extrapolate: 'clamp',
    });

    let titleFontSizeAnim = this.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [36, 24],
      extrapolate: 'clamp',
    });

    let subtitleFontSizeAnim = this.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [20, 14],
      extrapolate: 'clamp',
    });

    let animatedHeaderHeight = this.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    });

    let animatePaddingTop = this.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    });

    let titleLeftAnim = this.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [this.props.postview.initialTitleLeft, 150],
      extrapolate: 'clamp',
    });

    let subtitleLeftAnim = this.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [this.props.postview.initialSubtitleLeft, 150],
      extrapolate: 'clamp',
    });

    return (
      <View>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          pagingEnabled={true}
          onScroll={Animated.event(
            // scrollX = e.nativeEvent.contentOffset.x
            [{ nativeEvent: { contentOffset: { y: this.scrollY }}}]
          )}
          scrollEventThrottle={16}
          stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={false}
          endFillColor={'#ffffff'}
          bounces={false}
        >
          <Animated.View
            style={[styles.header, { height: animatedHeaderHeight }]}
          >
            <Animated.View style={[styles.cover]}>
              <Animated.Text
                ref={(c) => this.title = c}
                style={[styles.title, { fontSize: titleFontSizeAnim, left: titleLeftAnim }]}
                onLayout={event => this.onTitleLayout(event)}
              >
                {name}
              </Animated.Text>
              <Animated.Text
                ref={(c) => this.subtitle = c}
                style={[styles.subtitle, { fontSize: subtitleFontSizeAnim, left: subtitleLeftAnim }]}
                onLayout={event => this.onSubtitleLayout(event)}
              >
                {nameEN}
              </Animated.Text>
            </Animated.View>
            <Animated.Image
              style={{
                position: 'absolute',
                top: topOffset,
                left: leftOffset,
                width: HEADER_COVER_WIDTH,
                height: HEADER_COVER_WIDTH,
                borderRadius: HEADER_COVER_WIDTH / 2,
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
          <Animated.View style={[styles.page, { paddingTop: animatePaddingTop }]}>
            <Text>{'INTRODUCTION'}</Text>
            <Text>{content}</Text>
          </Animated.View>
          <Animated.View style={[styles.page, { paddingTop: animatePaddingTop }]}>
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
  postview: PropTypes.object.isRequired,
  updatePostTitle: PropTypes.func.isRequired,
  updatePostSubtitle: PropTypes.func.isRequired,
  clearPostView: PropTypes.func.isRequired,
};

export default Post;
