import * as React from 'react';
import { connect } from 'react-redux';
import * as numeral from 'numeral';
import { fetchData, setSortBy } from '../actions/filtersActions';
import { filterCountries } from '../selectors/filterCountries';
import { sortCountries } from '../selectors/sortCountries';

interface TableProps {
  loaded: boolean;
  countries: any[];
  number: number;
  sortBy: string;
  getData: () => void;
  setSortBy: (sortBy: string) => void;
}

class Table extends React.Component<TableProps, {}> {
  private sortBy = (sortBy: string): void => {
    this.props.setSortBy(sortBy);
    // this.props.fetchData();
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    let isPlural: string = this.props.number > 1 ? 'results' : 'result';

    if (this.props.loaded && this.props.countries.length > 0) {
      return (
        <div className="table">
          <p className="number">{`${this.props.number} ${isPlural} found`}</p>
          <p className="info"><i>* click on the headings to sort the list</i></p>
          <p className="info"><i>* click on country name for more info</i></p>
          <table>
            <thead>
              <tr>
                <th>Flag</th>
                <th onClick={() => this.sortBy('name')}>Name{this.props.sortBy === 'name' && <span>&#9660;</span>}</th>
                <th onClick={() => this.sortBy('capital')}>Capital{this.props.sortBy === 'capital' && <span>&#9660;</span>}</th>
                <th onClick={() => this.sortBy('area')}>Area (km²){this.props.sortBy === 'area' && <span>&#9660;</span>}</th>
                <th onClick={() => this.sortBy('population')}>Population{this.props.sortBy === 'population' && <span>&#9660;</span>}</th>
                <th>Code</th>
                <th onClick={() => this.sortBy('region')}>Region{this.props.sortBy === 'region' && <span>&#9660;</span>}</th>
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
                  <td className="td-calling-code">{country.callingCodes[0] && '+' + country.callingCodes[0]}</td>
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
          <img className="loader" src={require('../styles/img/loader.gif')}/>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  loaded: state.loaded,
  countries: sortCountries(filterCountries(state.countries, state.filterType, state.filter), state.sortBy),
  number: filterCountries(state.countries, state.filterType, state.filter).length,
  sortBy: state.sortBy
});

const mapDispatchToProps = (dispatch) => ({
  getData: () => fetchData(dispatch),
  setSortBy: (sortBy) => dispatch(setSortBy(sortBy))
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);