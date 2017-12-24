import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Home from './components/Home';
import store from './store/configureStore';
import './styles/index.scss';

const provider = (
  <Provider store={store}>
    <Home/>
  </Provider>
);

ReactDOM.render(provider, document.getElementById('app'));