import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers/GameReducer';
import './styles/main.scss';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(reducer, applyMiddleware(thunkMiddleware, logger));


import {fetchDeck, fetchCards, matchCards} from './actions/actions';
store.dispatch(fetchDeck())
  .then(() => {
    return store.dispatch(fetchCards());
  })
  .then(() => {
    const cards = store.getState().cards;
    store.dispatch(matchCards(cards.slice(0,2)));

    console.log(store.getState());  
  });


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
