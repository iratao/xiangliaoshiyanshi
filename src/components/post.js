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
    paddingTop: 35,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 0.3,
  },
});

class Post extends Component {
  render() {
    let { coverURL, name, nameEN, genusSpecies, family, origin, cultivated } = this.props;
    let genusSpeciesLabel = 'Genus Species';
    let familyLabel = 'Family';
    let originLabel = 'Origin';
    let cultivatedLabel = 'Cultivated';

    return (
      <View style={styles.cover}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{nameEN}</Text>
        <Image style={styles.coverImage} source={{ uri: coverURL }} />
        <View style={styles.labelViewContainer}>
          <View style={styles.labelView}><Text style={styles.label}>{genusSpeciesLabel}:</Text><Text style={styles.labelContent}>{genusSpecies}</Text></View>
          <View style={styles.labelView}><Text style={styles.label}>{familyLabel}:</Text><Text style={styles.labelContent}>{family}</Text></View>
          <View style={styles.labelView}><Text style={styles.label}>{originLabel}:</Text><Text style={styles.labelContent}>{origin}</Text></View>
        </View>
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
