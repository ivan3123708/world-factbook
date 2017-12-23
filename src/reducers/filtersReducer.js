import axios from 'axios';

const initialState = {
  filter: '',
  countries: []
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
        ...state
      }
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.filter
      }
    default:
      return state
  }
}

export default filtersReducer;