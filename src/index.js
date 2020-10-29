import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'
import { Provider } from 'react-redux'
import { createStore,compose,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import gameReducer from './redux/reducers'
import './index.css';

const store = createStore(gameReducer, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
