import React from 'react';
import { AppRegistry } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import App from './App';
import { articles } from './src/reducers';
import actions from './src/actions';

const loggerMiddleware = createLogger();
const store = createStore(articles, applyMiddleware(thunkMiddleware, loggerMiddleware));
store.dispatch(actions.fetchArticles());

const DrupalAPITest = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('DrupalAPITest', () => DrupalAPITest);
