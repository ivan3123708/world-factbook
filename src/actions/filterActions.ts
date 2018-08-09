import axios from 'axios';

// FETCH DATA
interface FetchData {
  type: 'FETCH_DATA';
  countries: any[];
};

export const fetchData = (dispatch) => {
  axios.get('https://restcountries.eu/rest/v2/all')
    .then((res) => dispatch({
      type: 'FETCH_DATA',
      countries: res.data
    }));
};

// SET FILTER TYPE
type FilterType = 'name' | 'capital' | 'calling code' | 'region' | 'subregion';

interface SetFilterType {
  type: 'SET_FILTER_TYPE';
  filterType: FilterType;
};

export const setFilterType = (filterType: FilterType): SetFilterType => ({
  type: 'SET_FILTER_TYPE',
  filterType: filterType
});


// SET FILTER
interface SetFilter {
  type: 'SET_FILTER';
  filter: string;
};

export const setFilter = (filter: string): SetFilter => ({
  type: 'SET_FILTER',
  filter: filter
});

// SET SORT BY
type SortBy = 'name' | 'capital' | 'area' | 'population' | 'region';

interface SetSortBy {
  type: 'SET_SORT_BY';
  sortBy: SortBy;
};

export const setSortBy = (sortBy: SortBy): SetSortBy => ({
  type: 'SET_SORT_BY',
  sortBy: sortBy
});

export type Actions = FetchData | SetFilterType | SetFilter | SetSortBy;