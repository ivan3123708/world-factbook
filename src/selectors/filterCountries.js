const filterName = (countriesArr, name) => {
  return countriesArr.filter((item) => item.name === name)
}

const filterCapital = (countriesArr, capital) => {
  return countriesArr.filter((item) => item.capital === capital)
}

export { filterName, filterCapital };