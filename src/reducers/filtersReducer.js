const initialState = {
  loaded: false,
  countries: [],
  filterType: 'name',
  filter: '',
  sortBy: 'name'
};

const filtersReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_DATA':
      return {
        ...state,
        loaded: true,
        countries: action.countries
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