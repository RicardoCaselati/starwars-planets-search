import React, { useState, useEffect } from 'react';
import { string } from 'prop-types';
import fetchPlanets from '../services/planetsAPI';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planet, setPlanets] = useState([]);

  const callAPI = async () => {
    const returnPlanetsAPI = await fetchPlanets();
    setPlanets(returnPlanetsAPI);
  };

  useEffect(() => {
    callAPI();
  }, []);

  const store = {
    planet,
  };

  return (
    <PlanetsContext.Provider value={ store }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: string,
}.isRequired;

export default PlanetsProvider;