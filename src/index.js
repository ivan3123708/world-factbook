import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Home from './components/Home';
import store from './store/configureStore';
import './styles/index.scss';

setTimeout(() => {
  console.log(store.getState());
}, 1500);

const provider = (
  <Provider store={store}>
    <Home/>
  </Provider>
);

ReactDOM.render(provider, document.getElementById('app'));