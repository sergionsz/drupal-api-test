import { getArticles } from './api';

const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';

const actions = {
  requestArticles() {
    return {
      type: REQUEST_ARTICLES,
    };
  },
  receiveArticles(data) {
    return {
      type: RECEIVE_ARTICLES,
      data,
    };
  },
  fetchArticles(page) {
    return (dispatch) => {
      dispatch(this.requestArticles());
      getArticles(page).then(
        data => dispatch(this.receiveArticles(data)),
        error => { throw Error(error); }
      );
    };
  },
};

export default actions;
export { REQUEST_ARTICLES, RECEIVE_ARTICLES };
