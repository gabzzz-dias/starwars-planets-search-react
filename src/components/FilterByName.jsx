import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function InputsSearch() {
  const { filters, setFilters } = useContext(PlanetsContext);

  function searchByText({ target }) {
    setFilters({ ...filters, filterByName: { name: target.value.toLowerCase() } });
  }

  function renderInput() {
    return (
      <label htmlFor="input-name">
        <input
          name="input-name"
          onChange={ searchByText }
          data-testid="name-filter"
        />
      </label>
    );
  }

  return (
    renderInput()
  );
}

export default InputsSearch;
