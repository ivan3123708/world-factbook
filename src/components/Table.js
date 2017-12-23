import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/filtersAction';

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
                <th>Language</th>
                <th>Calling Code</th>
                <th>Region</th>
                <th>Subregion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.props.countries[0].name}</td>
              </tr>
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
  countries: state.countries
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);