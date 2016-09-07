import {
  REQUEST_ARTICLES,
  RECEIVE_ARTICLES,
} from './actions';

function articles(state = {
  articles: [],
  isFetching: false,
  currentPage: -1,
}, action) {
  switch (action.type) {
    case REQUEST_ARTICLES:
      return Object.assign({}, state, { isFetching: true });
    case RECEIVE_ARTICLES:
      return Object.assign({}, state, {
        articles: state.articles.concat(action.data),
        isFetching: false,
        currentPage: state.currentPage + 1,
      });
    default:
      return state;
  }
}

export default articles;
