import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { fetchData } from '../actions/filtersActions';
import { filterCountries } from '../selectors/filterCountries';

class Table extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.fetchData();
    }, 1500);
  }

  render() {

    let isPlural = this.props.number > 1 ? 'results' : 'result';

    if(this.props.loaded && this.props.countries.length > 0) {
      return (
        <div className="table">
          <p className="number">{`${this.props.number} ${isPlural} found`}</p>
          <p className="info"><i>* click on country name for more info</i></p>
          <table>
            <thead>
              <tr>
                <th>Flag</th>
                <th>Name</th>
                <th>Capital</th>
                <th>Area (km²)</th>
                <th>Population</th>
                <th>Code</th>
                <th>Region</th>
                <th>Subregion</th>
              </tr>
            </thead>
            <tbody>
              {this.props.countries.map((country) => (
                <tr key={country.name}>
                  <td className="td-flag"><img src={country.flag}/></td>
                  <td className="td-name"><a href={`https://en.wikipedia.org/wiki/${country.name}`} target="blank">{country.name}</a></td>
                  <td className="td-capital">{country.capital}</td>
                  <td className="td-area">{numeral(country.area).format('0,0')}</td>
                  <td className="td-population">{numeral(country.population).format('0,0')}</td>
                  <td className="td-calling-code">{'+' + country.callingCodes[0]}</td>
                  <td className="td-region">{country.region}</td>
                  <td className="td-subregion">{country.subregion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    } else if (this.props.loaded && this.props.countries.length === 0) {
      return (
        <div>
          <p className="no-results">No results found</p>
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
  loaded: state.loaded,
  countries: filterCountries(state.countries, state.filterType, state.filter),
  number: filterCountries(state.countries, state.filterType, state.filter).length
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);