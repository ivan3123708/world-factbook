import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { filtersReducer } from '../reducers/filtersReducer';

const composeEnhancers = (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface StoreState {
  loaded: boolean;
  countries: any[];
  filterType: string;
  filter: string;
  sortBy: string;
};

const store = createStore<StoreState>(
  filtersReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;