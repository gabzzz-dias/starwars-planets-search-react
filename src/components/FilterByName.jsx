import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function InputsSearch() {
  const { nameFilter } = useContext(PlanetsContext);

  function renderInput() {
    return (
      <label htmlFor="input-name">
        <input
          name="input-name"
          onChange={ (event) => nameFilter(event.target.value) }
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
