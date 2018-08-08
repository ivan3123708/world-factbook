const filterCountries = (countriesArr: any[], filterType: string, filter: string): any[] => {
  if(filter) {
    let regex = new RegExp(`^${filter}.*$`, 'i');
    if(filterType === 'calling code') {
      return countriesArr.filter((item) => {
        if(item.callingCodes) {
          return regex.test(item.callingCodes[0] + '')
        }
      })
    } else {
      return countriesArr.filter((item) => regex.test(item[filterType]))
    }
  } else {
    return countriesArr;
  }
}

export { filterCountries };