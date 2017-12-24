import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/filtersActions';
import { filterCountries } from '../selectors/filterCountries';

class Table extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.fetchData();
    }, 1500);
  }

  render() {

    if(this.props.countries.length) {
      return (
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Flag</th>
                <th>Name</th>
                <th>Capital</th>
                <th>Area</th>
                <th>Population</th>
                <th>Calling Code</th>
                <th>Region</th>
                <th>Subregion</th>
              </tr>
            </thead>
            <tbody>
              {this.props.countries.map((country) => (
                <tr key={country.name}>
                  <td><img src={country.flag}/></td>
                  <td>{country.name}</td>
                  <td>{country.capital}</td>
                  <td>{country.area}</td>
                  <td>{country.population}</td>
                  <td>{country.callingCodes[0]}</td>
                  <td>{country.region}</td>
                  <td>{country.subregion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    } else {
      return (
        <div>
          <img src="../../src/styles/img/loader.gif"/>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  countries: filterCountries(state.countries, state.filterType, state.filter)
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);