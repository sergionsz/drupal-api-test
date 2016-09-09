const url = page => `http://198.199.122.4/costa-rica/lastnews-articles/?page=${page}`;

/**
 * Optimístically removes XML tags from a string
 * @param  {String} string    The string to process
 * @return {String}           The string without XML tags
 */
function stripTags(string) {
  return string.replace(/<[^>]+>/ig, '');
}

/**
 * Fetches articles from the server.
 * On success, changes the nid from String to Number and strips XML tags from it
 * On error, throws.
 * @param  {Number} [page=0]  Number of the page from which to fetch data
 * @return {Promise}          Promise that resolves with the array of processed articles
 */
function getArticles(page = 0) {
  return fetch(url(page)).then(
    response => response.json().then(
      items => items.map(item => Object.assign(item, {
        nid: Number(item.nid),
        body: stripTags(item.body),
      }))
    ),
    error => { throw Error(error); }
  );
}

export { getArticles, url };
