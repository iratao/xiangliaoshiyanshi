import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import LabDeleteButtonImg from './labDeleteButtonImg';

const styles = StyleSheet.create({
  cover: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  coverView: {
    paddingLeft: 31,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDFEFE',
    paddingBottom: 12,
    paddingTop: 16,
  },
  name: {
    paddingLeft: 24,
    flex: 0.6,
  },
  deleteBtn: {
    paddingRight: 41,
  },
});

class LabListItem extends Component {
  render() {
    const { id, cover, name, nameEN, onDeletePressed } = this.props;
    return (
      <View style={styles.row}>
        <View style={styles.coverView}>
          <Image
            style={styles.cover}
            source={{ uri: cover }}
          />
        </View>
        <View style={styles.name}>
          <Text>{name}</Text>
          <Text>{nameEN}</Text>
        </View>
        <View style={styles.deleteBtn}>
          <LabDeleteButtonImg
            onPressButton={() => onDeletePressed(id)}
          />
        </View>
      </View>
    );
  }
}


LabListItem.propTypes = {
  id: PropTypes.number.isRequired,
  cover: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nameEN: PropTypes.string.isRequired,
  onDeletePressed: PropTypes.func.isRequired,
};

export default LabListItem;
