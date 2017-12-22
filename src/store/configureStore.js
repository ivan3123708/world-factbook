import { createStore } from 'redux';
import filtersReducer from '../reducers/filtersReducer';

let store = createStore(filtersReducer);

export default store;