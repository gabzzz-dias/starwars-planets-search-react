import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import TableHeader from './TableHeader';

function TableBody() {
  const {
    data,
    filters,
    filteredThings, slctFilters, filterSelect } = useContext(PlanetsContext);

  function optionsColumnFilter() {
    const options = ['population', 'orbital_period', 'diameter',
      'rotation_period', 'surface_water'];
    return (options.map((item, index) => (
      <option
        key={ index }
        id={ item }
        name="column"
      >
        {item}
      </option>
    )));
  }

  function optionComparisonFilter() {
    const options = ['maior que', 'menor que', 'igual a'];
    return (options.map((method) => (
      <option
        key={ method }
        id="comparison"
        name="comparison"
        value={ method }
      >
        {method}
      </option>
    )));
  }

  function numericFilters() {
    return (
      <section className="numericFilters">
        <select
          data-testid="column-filter"
          name="column"
          onChange={ ({ target }) => slctFilters(target) }
        >
          {optionsColumnFilter()}
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ ({ target }) => slctFilters(target) }
          name="comparison"
        >
          {optionComparisonFilter()}
        </select>
        <label htmlFor="number">
          valor:
          <input
            data-testid="value-filter"
            type="number"
            name="value"
            id="number"
            min="0"
            onChange={ ({ target }) => slctFilters(target) }
          />
        </label>
        <button
          data-testid="button-filter"
          type="button"
          onClick={ () => filterSelect(filters) }
        >
          Filtrar
        </button>
      </section>
    );
  }

  function tableMap() {
    if (filteredThings.length > 0) {
      return (
        filteredThings.map((planet, index) => (
          <tr key={ index }>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>))
      );
    } return (
      data.map((planet, index) => (
        <tr key={ index }>
          <td>{planet.name}</td>
          <td>{planet.rotation_period}</td>
          <td>{planet.orbital_period}</td>
          <td>{planet.diameter}</td>
          <td>{planet.climate}</td>
          <td>{planet.gravity}</td>
          <td>{planet.terrain}</td>
          <td>{planet.surface_water}</td>
          <td>{planet.population}</td>
          <td>{planet.films}</td>
          <td>{planet.created}</td>
          <td>{planet.edited}</td>
          <td>{planet.url}</td>
        </tr>))
    );
  }

  return (
    <main>
      <div>
        { numericFilters() }
      </div>
      <table>
        <TableHeader />
        <tbody>
          {tableMap()}
        </tbody>
      </table>
    </main>

  );
}

// Agradecimentos especiais à Mariana Mohr, que me ajudou a fazer o map desse requisito que eu fiquei travado por muuito tempo. Valeuuuu Mari!

export default TableBody;
