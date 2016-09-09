/* eslint-disable max-len */
import test from 'tape';
import { articles } from '../src/reducers.js';
import actions from '../src/actions.js';
import initialState from '../doc/state.example';

const items = [
  {
    nid: 21,
    title: 'Ex Haero Iriure Quidem',
    body: `Acsi ex humo tamen vero. Gravis neo turpis. Consectetuer suscipere tego typicus.

Causa elit hendrerit humo lobortis mauris vicis. Brevitas torqueo valde vindico.`,
    category: 'Noticias',
    image_url: 'http://198.199.122.4/sites/files/2016-09/city-q-c-640-480-6.jpg',
    article_url: 'http://198.199.122.4/costa-rica/node/21',
  },
  {
    nid: 20,
    title: 'Augue Macto',
    body: `Autem camur metuo. Abluo capto conventio feugiat jugis jus nulla.

Aptent decet mos neo qui quibus ratis sed virtus. Exputo hos vindico.`,
    category: 'Noticias',
    image_url: 'http://198.199.122.4/sites/files/2016-09/nightlife-q-c-640-480-6.jpg',
    article_url: 'http://198.199.122.4/costa-rica/node/20',
  },
];

test('Articles reducer', assert => {
  const woActionExpected = initialState;
  const woActionActual = articles(initialState, {});
  assert.deepEqual(woActionActual, woActionExpected,
  'Without an action, should return the same state');

  const afterReqExpected = Object.assign({}, initialState, { isFetching: true });
  const afterReqActual = articles(initialState, actions.requestArticles());
  assert.deepEqual(afterReqActual, afterReqExpected,
  'Should return state with fetching on');

  const afterReceiveExpected = Object.assign({}, afterReqExpected, {
    articles: initialState.articles.concat(items),
    isFetching: false,
    currentPage: initialState.currentPage + 1,
  });
  const afterReceiveActual = articles(afterReqExpected, actions.receiveArticles(items));
  assert.deepEqual(afterReceiveActual, afterReceiveExpected,
  'Should return state with data and fetching off');

  assert.end();
});
