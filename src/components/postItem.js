import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  row: {
    justifyContent: 'center',
    margin: 3,
    width: 105,
    height: 115,
    alignItems: 'center',
  },
  thumb: {
    width: 90,
    height: 90,
    borderRadius: 45,
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
