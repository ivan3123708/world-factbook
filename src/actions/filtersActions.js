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

export { fetchData, setFilterType, setFilter };