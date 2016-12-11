import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
  cover: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FDFEFE',
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
});

class Post extends Component {
  render() {
    let { coverURL, name, nameEN, content } = this.props;
    return (
      <View style={styles.cover}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{nameEN}</Text>
        <Image style={styles.coverImage} source={{ uri: coverURL }} />
      </View>
    );
  }
}

Post.propTypes = {
  coverURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nameEN: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Post;
