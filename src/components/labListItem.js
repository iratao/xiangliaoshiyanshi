import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import LabDeleteButtonImg from './labDeleteButtonImg';

const styles = StyleSheet.create({
  cover: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  coverView: {
    flex: 0.2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  name: {
    flex: 0.7,
    paddingLeft: 10,
  },
  deleteBtn: {
    flex: 0.1,
  },
});

class LabListItem extends Component {
  render() {
    const { cover, name, nameEN, onDeletePressed } = this.props;
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
            onPressButton={onDeletePressed}
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
