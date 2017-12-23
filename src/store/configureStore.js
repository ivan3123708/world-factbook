import { createStore } from 'redux';
import filtersReducer from '../reducers/filtersReducer';

let store = createStore(filtersReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;