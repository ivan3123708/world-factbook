import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import store from './store/configureStore';
import './styles/index.scss';

console.log(store.getState());

ReactDOM.render(<Home/>, document.getElementById('app'));