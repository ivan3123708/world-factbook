const sortCountries = (countriesArr, sortBy) => {
  if (sortBy === 'name' || sortBy === 'capital' || sortBy === 'region') {
    return countriesArr.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : ((b[sortBy] > a[sortBy]) ? -1 : 0));
  } else {
    return countriesArr.sort((a, b) => b[sortBy] - a[sortBy]);
  }
}

export { sortCountries };