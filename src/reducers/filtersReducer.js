import axios from 'axios';

let countries = [];

axios.get('https://restcountries.eu/rest/v2/all')
  .then((res) => {
    countries = res.data;
  })
  .catch((e) => {
    console.log(e)
  });

const initialState = {
  filter: '',
  countries: countries
};

const filtersReducer = (state = initialState, action) => {
  switch(action.type) {
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