import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const PlanetsHeader = () => {
  const { setFilter } = useContext(PlanetsContext);

  return (
    <div>
      <input
        name="input"
        type="text"
        data-testid="name-filter"
        onChange={ (e) => setFilter({ name: e.target.value }) }
      />
    </div>
  );
};

export default PlanetsHeader;
