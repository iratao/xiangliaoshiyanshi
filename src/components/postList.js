import React, { Component, PropTypes } from 'react';
import { ListView, View, StyleSheet } from 'react-native';

import PostItem from './postItem';

const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    backgroundColor: '#FDFEFE',
    paddingTop: 10,
  },
  footer: {
    height: 180,
  }
});

class PostList extends Component {
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.listDataSource = ds.cloneWithRows(props.posts);
  }

  componentWillMount() {
    this.props.getPosts();
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
    this.listDataSource = this.listDataSource.cloneWithRows(nextProps.posts);
  }

  renderRow(rowData) {
    return (
      <PostItem
        coverURL={rowData.coverThumbnail}
        title={rowData.name}
        content={rowData.name}
        onItemPressed={(index) => this.props.onItemPressed(index)}
        id={rowData.id}
      />
    );
  }

  renderFooter() {
    return (
      <View style={styles.footer}></View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FDFEFE' }}>
        <ListView
          contentContainerStyle={styles.list}
          dataSource={this.listDataSource}
          initialListSize={21}
          pageSize={3}
          scrollRenderAheadDistance={500}
          renderRow={(rowData) => this.renderRow(rowData)}
          renderFooter={this.renderFooter}
          showsVerticalScrollIndicator={false}
          endFillColor={'#FDFEFE'}
          bounces={false}
        />
      </View>
    );
  }
}

PostList.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  onItemPressed: PropTypes.func.isRequired,
};

export default PostList;
