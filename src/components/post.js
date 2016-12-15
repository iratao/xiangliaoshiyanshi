import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

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
        <Button
          onPress={() => this.props.addToLab([this.props.id])}
          title="Add To Lab"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  coverURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nameEN: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  addToLab: PropTypes.func.isRequired,
};

export default Post;
