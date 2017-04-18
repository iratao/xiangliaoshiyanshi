import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, Animated, Easing, Image, Button, ScrollView, Dimensions, Platform } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const HEADER_COVER_WIDTH = SCREEN_HEIGHT >= 667 ? 324 : 264;
const NAVBAR_HEIGHT = Platform.OS === 'ios'? 64 : 54;
// const HOME_HEIGHT = SCREEN_HEIGHT - HEADER_COVER_WIDTH - NAVBAR_HEIGHT - 160;
const HOME_HEIGHT = SCREEN_HEIGHT * 0.2;
const HEADER_MIN_HEIGHT = SCREEN_HEIGHT >= 667 ? 140 : 130;
const HEADER_MAX_HEIGHT = SCREEN_HEIGHT - NAVBAR_HEIGHT - HOME_HEIGHT;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const PAGE_CONTENT_PADDING_TOP = 25;

const TITLE_FONT_SIZE_ANIM_START = SCREEN_HEIGHT >= 667 ? 36 : 34;
const TITLE_FONT_SIZE_ANIM_END = SCREEN_HEIGHT >= 667 ? 24 : 22;
const SUBTITLE_FONT_SIZE_ANIM_START = SCREEN_HEIGHT >= 667 ? 20 : 18;
const SUBTITLE_FONT_SIZE_ANIM_END = SCREEN_HEIGHT >= 667 ? 14 : 12;
const PATE_CONTENT_TITLE_FONT_SIZE = SCREEN_HEIGHT >= 667 ? 20 : 18;
const PATE_CONTENT_BODY_FONT_SIZE = SCREEN_HEIGHT >= 667 ? 16 : 14;

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
  lineStyle: {
    height: 1,
    backgroundColor: '#FFCD0D',
    marginTop: 6,
    marginBottom: 15,
    width: 200.85,
  },
  page: {
    backgroundColor: '#FDFEFE',
    height: SCREEN_HEIGHT - NAVBAR_HEIGHT,
    paddingLeft: 30,
    paddingRight: 30,
  },
  pageContentTitle: {
    fontFamily: 'PingFang SC',
    fontSize: PATE_CONTENT_TITLE_FONT_SIZE,
    fontWeight: '300',
  },
  pageContentBody: {
    fontFamily: 'PingFang SC',
    fontSize: PATE_CONTENT_BODY_FONT_SIZE,
    fontWeight: '100',
  },
  title: {
    fontFamily: 'PingFang SC',
    paddingTop: 30,
    paddingBottom: 8,
    fontWeight: '300',
  },
  subtitle: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '200',
    paddingBottom: 30,
  },
  label: {
    fontWeight: '400',
    textAlign: 'left',
    flex: 0.35,
    paddingLeft: 30,
    fontFamily: 'PingFang SC',
    fontSize: 16,
  },
  labelContent: {
    textAlign: 'right',
    flex: 0.65,
    paddingRight: 30,
    fontFamily: 'PingFang SC',
    fontSize: 16,
    fontWeight: '200',
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
    let { coverThumbnail, name, nameEN, genusSpecies, family, origin, cookingUsage, otherName, introduction, medicalProperties, storageandchoice } = this.props.selectedItem;
    let genusSpeciesLabel = '种类';
    let familyLabel = '科';
    let originLabel = '原产地';
    let otherNameLabel = '别名';

    let topOffset = this.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [130, - HEADER_COVER_WIDTH / 4],
      extrapolate: 'clamp',
    });

    let leftOffset = this.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [SCREEN_WIDTH / 2 - HEADER_COVER_WIDTH / 2, - HEADER_COVER_WIDTH / 4],
      extrapolate: 'clamp',
    });

    let scaleAnim = this.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 0.4],
      extrapolate: 'clamp',
    });

    let titleFontSizeAnim = this.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [TITLE_FONT_SIZE_ANIM_START, TITLE_FONT_SIZE_ANIM_END],
      extrapolate: 'clamp',
    });

    let subtitleFontSizeAnim = this.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [SUBTITLE_FONT_SIZE_ANIM_START, SUBTITLE_FONT_SIZE_ANIM_END],
      extrapolate: 'clamp',
    });

    let animatedHeaderHeight = this.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    });

    let animatePaddingTop = this.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, HEADER_MIN_HEIGHT + PAGE_CONTENT_PADDING_TOP],
      extrapolate: 'clamp',
    });

    let titleLeftAnim = this.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [this.props.postview.initialTitleLeft, 160],
      extrapolate: 'clamp',
    });

    let subtitleLeftAnim = this.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [this.props.postview.initialSubtitleLeft, 160],
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
              source={{ uri: coverThumbnail }}
            />
          </Animated.View>
          <View style={styles.home}>
            <View style={styles.labelViewContainer}>
              <View style={styles.labelView}><Text style={styles.label}>{otherNameLabel}:</Text><Text style={styles.labelContent}>{otherName}</Text></View>
            </View>
          </View>
          <Animated.View style={[styles.page, { paddingTop: animatePaddingTop }]}>
            <Text style={styles.pageContentTitle}>{'简介'}</Text>
            <View style={styles.lineStyle} />
            <Text style={styles.pageContentBody}>{introduction}</Text>
          </Animated.View>
          <Animated.View style={[styles.page, { paddingTop: animatePaddingTop }]}>
            <Text style={styles.pageContentTitle}>{'烹调用途'}</Text>
            <View style={styles.lineStyle} />
            <Text style={styles.pageContentBody}>{cookingUsage}</Text>
          </Animated.View>
          <Animated.View style={[styles.page, { paddingTop: animatePaddingTop }]}>
            <Text style={styles.pageContentTitle}>{'功效'}</Text>
            <View style={styles.lineStyle} />
            <Text style={styles.pageContentBody}>{medicalProperties}</Text>
          </Animated.View>
        </ScrollView>
      </View>
    );
  }
}

Post.propTypes = {
  selectedItem: PropTypes.object.isRequired,
  addToLab: PropTypes.func.isRequired,
  postview: PropTypes.object.isRequired,
  updatePostTitle: PropTypes.func.isRequired,
  updatePostSubtitle: PropTypes.func.isRequired,
  clearPostView: PropTypes.func.isRequired,
};

export default Post;
