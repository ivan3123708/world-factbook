const fetchData = () => ({
  type: 'FETCH_DATA',
});

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