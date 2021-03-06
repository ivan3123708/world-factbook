import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/filterActions';

interface SearchFiltersProps {
  filter: string;
  setFilter: (filter: string) => void;
  setFilterType: (type: string) => void;
}

class SearchFilters extends React.Component<SearchFiltersProps, {}> {

  private filterTypeChange = (e) => {
    this.props.setFilterType(e.target.value);
  }

  private filterChange = (e) => {
    if (/^[A-Za-z0-9\s]*$/.test(e.target.value)) {
      this.props.setFilter(e.target.value);
    }
  }

  render() {
    return (
      <div className="search-filters">
        <input type="text" value={this.props.filter} onChange={this.filterChange} autoFocus/>
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

const mapStateToProps = (state) => ({
  filter: state.filter
});

const mapDispatchToProps = (dispatch) => ({
  setFilterType: (type) => dispatch(actions.setFilterType(type)),
  setFilter: (filter) => dispatch(actions.setFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilters);