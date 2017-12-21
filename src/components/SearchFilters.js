import React from 'react';

class SearchFilters extends React.Component {

  render() {
    return (
      <div className="search-filters">
        <input type="text"/>
        <select>
          <option>Name</option>
          <option>Capital</option>
        </select>
      </div>
    )
  }
}

export default SearchFilters;