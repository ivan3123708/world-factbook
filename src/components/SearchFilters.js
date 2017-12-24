import React from 'react';
import { connect } from 'react-redux';
import { setFilterType, setFilter } from '../actions/filtersActions';

class SearchFilters extends React.Component {

  filterTypeChange = (e) => {
    this.props.setFilterType(e.target.value)
  }

  filterChange = (e) => {
    this.props.setFilter(e.target.value)
  }

  render() {
    return (
      <div className="search-filters">
        <input type="text" onChange={this.filterChange} autoFocus/>
        <select onChange={this.filterTypeChange}>
          <option value="name">Name</option>
          <option value="capital">Capital</option>
          <option value="calling code">Calling Code</option>
          <option value="region">Region</option>
          <option value="subregion">Subregion</option>
        </select>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setFilterType: (type) => dispatch(setFilterType(type)),
  setFilter: (filter) => dispatch(setFilter(filter))
});

export default connect(undefined, mapDispatchToProps)(SearchFilters);