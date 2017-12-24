import axios from 'axios';

const initialState = {
  loaded: false,
  countries: [],
  filterType: 'name',
  filter: '',
  sortBy: 'name'
};

axios.get('https://restcountries.eu/rest/v2/all')
  .then((res) => {
    initialState.countries = res.data;
  })
  .catch((e) => {
    console.log(e)
  });

const filtersReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_DATA':
      return {
        ...state,
        loaded: true
      }
    case 'SET_FILTER_TYPE':
      return {
        ...state,
        filterType: action.filterType
      }
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.filter
      }
    case 'SET_SORT_BY':
      return {
        ...state,
        sortBy: action.sortBy
      }
    default:
      return state
  }
}

export default filtersReducer;