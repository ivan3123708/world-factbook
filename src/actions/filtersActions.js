import axios from 'axios';

const fetchData = (dispatch) => {
  axios.get('https://restcountries.eu/rest/v2/all')
    .then((res) => dispatch({
      type: 'FETCH_DATA',
      countries: res.data
    }));
}

const setFilterType = (filterType) => ({
  type: 'SET_FILTER_TYPE',
  filterType: filterType
});

const setFilter = (filter) => ({
  type: 'SET_FILTER',
  filter: filter
});

const setSortBy = (sortBy) => ({
  type: 'SET_SORT_BY',
  sortBy: sortBy
});

export { fetchData, setFilterType, setFilter, setSortBy };