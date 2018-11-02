// React import
import React from 'react';
import ReactDOM from 'react-dom';
// CSS import
import './index.css';
// Component import
import App from './App';
// Service worker import
import * as serviceWorker from './serviceWorker';
// Redux import
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
// Reducer import
import reducer from './reducers';
// React router import
import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
