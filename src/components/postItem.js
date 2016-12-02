import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  row: {
    justifyContent: 'center',
    padding: 5,
    margin: 3,
    width: 100,
    height: 100,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC',
  },
  thumb: {
    width: 64,
    height: 64,
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
      <TouchableHighlight onPress={() => this.onItemPressed()}>
        <View style={styles.row}>
          <Image style={styles.thumb} source={{ uri: coverURL }} />
          <Text style={styles.text}>
            {title}
          </Text>
        </View>
      </TouchableHighlight>
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
