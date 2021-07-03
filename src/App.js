import React from 'react';
import './App.css';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';
import InputsSearch from './components/FilterByName';

function App() {
  return (
    <PlanetsProvider>
      <InputsSearch />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
