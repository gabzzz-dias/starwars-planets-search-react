import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../services/api';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const [filteredThings, setFilteredThings] = useState([]);

  const nameFilter = (string) => {
    const filterData = data.filter((nameStr) => {
      const dataReturn = nameStr.name.toLowerCase();
      const resultStr = string.toLowerCase();
      return dataReturn.includes(resultStr);
    });
    setFilteredThings(filterData);
  };

  const slctFilters = ({ name, value }) => {
    setFilters({ ...filters, [name]: value });
  };

  const filterSelect = (selections) => {
    let list = [];
    if (selections.comparison === 'menor que') {
      list = data.filter((itens) => (
        Number(itens[selections.column]) < Number(selections.value)));
    }
    if (selections.comparison === 'maior que') {
      list = data.filter((itens) => (
        Number(itens[selections.column]) > Number(selections.value)));
    }
    if (selections.comparison === 'igual a') {
      list = data.filter((itens) => (
        Number(itens[selections.column]) === Number(selections.value)));
    }
    setFilteredThings(list);
  };

  useEffect(() => {
    const getPlanets = async () => {
      const response = await fetchPlanets();
      setData(response.results);
    };
    getPlanets();
  }, []);

  const context = {
    data,
    setData,
    filters,
    setFilters,
    filteredThings,
    nameFilter,
    slctFilters,
    filterSelect,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;

// Agradecimentos super especiais a Gildeir Rodrigues e Daniel Roberto por termos passado a madrugada terminando esse projeto juntos. aprendi muito com eles e serei eternamente grato.

export default PlanetsProvider;
