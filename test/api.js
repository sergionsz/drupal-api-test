import test from 'blue-tape';
import fetchMock from 'fetch-mock';
import { getArticles } from '../src/api.js';

// eslint-disable-next-line max-len
const mockedResponse = String.raw`[{"nid":"21","title":"Ex Haero Iriure Quidem","body":"<p>Acsi ex humo tamen vero. Gravis neo turpis. Consectetuer suscipere tego typicus.<\/p>\n\n<p>Causa elit hendrerit humo lobortis mauris vicis. Brevitas torqueo valde vindico.<\/p>","category":"Noticias","image_url":"http:\/\/198.199.122.4\/sites\/files\/2016-09\/city-q-c-640-480-6.jpg","article_url":"http:\/\/198.199.122.4\/costa-rica\/node\/21"},{"nid":"20","title":"Augue Macto","body":"<p>Autem camur metuo. Abluo capto conventio feugiat jugis jus nulla.<\/p>\n\n<p>Aptent decet mos neo qui quibus ratis sed virtus. Exputo hos vindico.<\/p>","category":"Noticias","image_url":"http:\/\/198.199.122.4\/sites\/files\/2016-09\/nightlife-q-c-640-480-6.jpg","article_url":"http:\/\/198.199.122.4\/costa-rica\/node\/20"}]`;
const expectedArticles = [
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

test('API', assert => {
  fetchMock.get('*', mockedResponse);
  getArticles().then(
    actualArticles => {
      assert.deepEqual(actualArticles, expectedArticles,
      'Should return a processed list of articles');
    },
    error => assert.fail(error)
  ).then(
    () => {
      fetchMock.restore();
      assert.end();
    }
  );
});
