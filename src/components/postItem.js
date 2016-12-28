import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  row: {
    justifyContent: 'center',
    margin: 3,
    width: 100,
    height: 100,
    alignItems: 'center',
  },
  thumb: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  text: {
    flex: 1,
    marginTop: 5,
    fontWeight: 'bold',
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
