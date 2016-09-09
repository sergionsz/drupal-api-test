Drupal API Test
=================

Description
-----------

This is a test of [React-Native](https://facebook.github.io/react-native/) that uses:
- [Redux](http://redux.js.org/)
- [redux-thunk](https://github.com/gaearon/redux-thunk)
- [redux-logger](https://github.com/evgenyrodionov/redux-logger)

This app loads articles from a hard-coded URL and displays fetched data as a scrollable 'infinite' list of posts. As the user scrolls, new posts are loaded and rendered.

At this time, this test runs in Android only.

Installation
------------

You need a connected device or AVD. To run, first edit the URL of the API in src/api.js, and then execute:

```
npm install
npm run android
```

Tests
-----

To run tests, execute:

```
npm test
```
