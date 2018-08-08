import * as React from 'react';
import SearchFilters from './SearchFilters';
import Table from './Table';

class Home extends React.Component<{}, {}> {
  render() {
    return (
      <div className="home">
        <h1>World Factbook</h1>
        <SearchFilters />
        <Table />
      </div>
    )
  }
};

export default Home;