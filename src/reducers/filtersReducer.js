const initialState = {
  filter: '',
  countries: [
    {
      name: 'Argentina',
      capital: 'Buenos Aires',
      population: 43000000
    },
    {
      name: 'Russia',
      capital: 'Moscow',
      population: 142000000
    },
    {
      name: 'Japan',
      capital: 'Tokyo',
      population: 125000000
    }
  ]
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