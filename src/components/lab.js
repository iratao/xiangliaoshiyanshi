import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, ListView, Image } from 'react-native';

const styles = StyleSheet.create({
  lab: {
    flex: 1,
  },
  cover: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
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

  renderRow(rowData) {
    return (
      <View style={styles.row}>
        <Image
          style={styles.cover}
          source={{ uri: rowData.cover }}
        />
      </View>
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
};

export default Lab;
