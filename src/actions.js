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

  /**
   * Returns a funciton that dispatches a requestArticles action and
   * then initiates article retrieval.
   * After getting the articles, dispatches a receiveArticles action.
   * @param  {Number} page   The page number to fetch articles from
   * @return {function}      A function to be used by redux-thunk
   */
  fetchArticles(page) {
    return (dispatch) => {
      dispatch(this.requestArticles());
      return getArticles(page).then(
        data => dispatch(this.receiveArticles(data)),
        error => { throw Error(error); }
      );
    };
  },
};

export default actions;
export { REQUEST_ARTICLES, RECEIVE_ARTICLES };
