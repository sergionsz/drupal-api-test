import test from 'blue-tape';
import fetchMock from 'fetch-mock';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import actions, {
  REQUEST_ARTICLES,
  RECEIVE_ARTICLES,
} from '../src/actions';
import data from '../doc/state.example';

const initialState = {
  articles: [],
  isFetching: false,
  currentPage: -1,
};

/* Create a false store */
const mockStore = configureStore([thunk]);
const store = mockStore(initialState);

const mockedResponse = '[]';

test('Actions', assert => {
  const reqExpected = {
    type: REQUEST_ARTICLES,
  };
  const reqActual = actions.requestArticles();
  assert.deepEqual(reqExpected, reqActual,
  'Should return a correct action for requesting articles');

  const receiveExpected = {
    type: RECEIVE_ARTICLES,
    data,
  };
  const receiveActual = actions.receiveArticles(data);
  assert.deepEqual(receiveActual, receiveExpected,
  'Should return a correct action for requesting articles');

  const expectedActions = [
    actions.requestArticles(),
    actions.receiveArticles(JSON.parse(mockedResponse)),
  ];
  fetchMock.get('*', mockedResponse);
  store.dispatch(actions.fetchArticles())
  .then(
    () => {
      const actualActions = store.getActions();
      assert.deepEqual(expectedActions, actualActions,
      'Should dispatch the appropiate actions');
    },
    error => assert.fail(error)
  ).then(
    () => {
      fetchMock.restore();
      assert.end();
    }
  );
});
