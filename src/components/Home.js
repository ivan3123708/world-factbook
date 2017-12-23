import React from 'react';
import SearchFilters from './SearchFilters';
import Table from './Table';

const Home = () => (
  <div className="home">
    <h1>World Factbook</h1>
    <SearchFilters />
    <Table />
  </div>
);

export default Home;