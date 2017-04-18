import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const THUMB_WIDTH = SCREEN_HEIGHT >= 667 ? 90 : 110;

const styles = StyleSheet.create({
  row: {
    justifyContent: 'center',
    margin: 3,
    width: THUMB_WIDTH + 15,
    height: THUMB_WIDTH + 25,
    alignItems: 'center',
  },
  thumb: {
    width: THUMB_WIDTH,
    height: THUMB_WIDTH,
    borderRadius: THUMB_WIDTH / 2,
  },
  text: {
    flex: 1,
    marginTop: 3,
    fontWeight: 'normal',
    fontFamily: 'PingFang SC',
    fontSize: 12,
  },
});

class PostItem extends Component {
  onItemPressed() {
    this.props.onItemPressed(this.props.id);
  }

  render() {
    let { id, coverURL, title, content } = this.props;
    return (
      <TouchableOpacity onPress={() => this.onItemPressed()}>
        <View style={styles.row}>
          <Image style={styles.thumb} source={{ uri: coverURL }} />
          <Text style={styles.text}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

PostItem.propTypes = {
  id: PropTypes.number.isRequired,
  coverURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onItemPressed: PropTypes.func.isRequired,
};

export default PostItem;
