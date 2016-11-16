import React, { Component, PropTypes } from 'react';
import { ListView, View } from 'react-native';

import PostItem from './postItem';

class PostList extends Component {
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });
    this.listDataSource = ds.cloneWithRows(props.posts);
  }

  componentDidMount() {
    this.props.getPosts();
  }

  componentWillReceiveProps(nextProps) {
    this.listDataSource = this.listDataSource.cloneWithRows(nextProps.posts);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ListView
          dataSource={this.listDataSource}
          renderRow={
            rowData => <PostItem
              coverURL={rowData.coverURL}
              title={rowData.title}
              content={rowData.content}
              onItemPressed={this.props.onItemPressed}
              id={rowData.id}
            />
          }
          initialListSize={10}
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
