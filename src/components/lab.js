import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, ListView, Image, Text } from 'react-native';
import LabListItem from './labListItem';

const styles = StyleSheet.create({
  lab: {
    flex: 1,
  },
});

class Lab extends Component {
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.listDataSource = ds.cloneWithRows(props.labSpices);
  }

  componentWillReceiveProps(nextProps) {
    this.listDataSource = this.listDataSource.cloneWithRows(nextProps.labSpices);
  }

  _onDeleteItemPressed(id) {
    this.props.deleteLabSpice(id);
  }

  renderRow(rowData) {
    return (
      <LabListItem
        id={rowData.id}
        cover={rowData.cover}
        name={rowData.name}
        nameEN={rowData.nameEN}
        onDeletePressed={id => this._onDeleteItemPressed(id)}
      />
    );
  }

  render() {
    return (
      <View style={styles.lab}>
        <ListView
          contentContainerStyle={styles.list}
          dataSource={this.listDataSource}
          initialListSize={21}
          pageSize={3}
          scrollRenderAheadDistance={500}
          renderRow={(rowData) => this.renderRow(rowData)}
        />
      </View>
    );
  }
}

Lab.propTypes = {
  labSpices: PropTypes.array.isRequired,
  deleteLabSpice: PropTypes.func.isRequired,
};

export default Lab;
