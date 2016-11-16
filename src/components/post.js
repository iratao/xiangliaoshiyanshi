import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({

});

class Post extends Component {
  render() {
    let { coverURL, title, content } = this.props;
    return (
      <View>
        <Text> {title} </Text>
      </View>
    );
  }
}

Post.propTypes = {
  coverURL: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Post;
