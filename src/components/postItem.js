import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  postItem: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  cover: {
    flex: 1,
    height: 150,
    resizeMode: 'cover',
  },
  info: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  shortDescription: {
    fontSize: 18,
  },
  title: {
    fontSize: 18,
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
        <View style={styles.postItem}>
          <Image style={styles.cover} source={coverURL} />
          <View style={styles.info}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.shortDescription}>{content}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

PostItem.propTypes = {
  id: PropTypes.string.isRequired,
  coverURL: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onItemPressed: PropTypes.func.isRequired,
};

export default PostItem;
