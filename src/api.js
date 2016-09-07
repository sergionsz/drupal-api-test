const url = page => `http://198.199.122.4/costa-rica/lastnews-articles/?page=${page}`;

function getArticles(page = 0) {
  return fetch(url(page)).then(
    response => response.json().then(
      items => items.map(item => Object.assign(item, {
        nid: Number(item.nid),
        body: item.body.replace(/(<([^>]+)>)/ig, ''),
      }))
    ),
    error => { throw Error(error); }
  );
}

export { getArticles, url };
