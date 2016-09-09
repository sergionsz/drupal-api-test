/* eslint-disable max-len*/

/**
 * Example of the state of the application
 */
const stateExample = {
  /**
   * List of articles, each one an object
   * @type {Array}
   */
  articles: [
    {
      nid: '21',
      title: 'Ex Haero Iriure Quidem',
      body: `Acsi ex humo tamen vero. Gravis neo turpis. Consectetuer suscipere tego typicus. Augue dolus enim gravis huic neo saepius saluto ullamcorper. Consequat decet in pneum. Capto damnum esse ideo imputo lucidus magna pala uxor. Hos ratis saluto secundum tego. Augue eu genitus gravis iriure iustum lucidus olim sed veniam.

Causa elit hendrerit humo lobortis mauris vicis. Brevitas torqueo valde vindico. Consectetuer defui ludus suscipere. Accumsan appellatio at brevitas consectetuer lucidus plaga secundum ut.`,
      category: 'Noticias',
      image_url: 'http://198.199.122.4/costa-rica/sites/costa-rica/files/2016-09/city-q-c-640-480-6.jpg',
      article_url: 'http://198.199.122.4/costa-rica/node/21',
    },
  ],

  /**
   * State of fetching. True if the system is currently fetching data from server
   * @type {Boolean}
   */
  isFetching: false,

  /**
   * The last successfully fetched page
   * @type {Number}
   */
  currentPage: 2,
};

export default stateExample;
