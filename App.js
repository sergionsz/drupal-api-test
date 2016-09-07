import React from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import Post from './src/Post';
import actions from './src/actions';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.nid !== r2.nid });

const App = ({ dataSource, currentPage, dispatch, fetching }) => (
  <ListView
    dataSource={dataSource}
    enableEmptySections
    initialListSize={6}
    renderRow={(rowData) => <Post
      nid={rowData.nid}
      title={rowData.title}
      body={rowData.body}
      category={rowData.category}
      imageUrl={rowData.image_url}
      articleUrl={rowData.article_url}
    />}
    onEndReached={() => {
      if (!fetching) {
        dispatch(actions.fetchArticles(currentPage + 1));
      }
    }}
  />
);
App.propTypes = {
  currentPage: React.PropTypes.number,
  dataSource: React.PropTypes.object,
  dispatch: React.PropTypes.func,
  fetching: React.PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    dataSource: ds.cloneWithRows(state.articles),
    fetching: state.isFetching,
    currentPage: state.currentPage,
  };
}

const AppWrapper = connect(
  mapStateToProps
)(App);

export default AppWrapper;
