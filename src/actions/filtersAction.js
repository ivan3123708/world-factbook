const fetchData = () => ({
  type: 'FETCH_DATA',
});

const filterBy = (filter) => ({
  type: 'SET_FILTER',
  filter: filter
});

export { fetchData, filterBy };