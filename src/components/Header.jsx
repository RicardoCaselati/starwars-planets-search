import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const FieldSearch = () => {
  const { setFilterByName } = useContext(PlanetsContext);
  // const [name, setName] = useState('');

  // handleChange = ({ target: { value } }) => {
  //   setFilterByName(value);
  // };

  return (
    <div>
      <input
        name="input"
        placeholder="Search a Planet"
        type="text"
        data-testid="name-filter"
        onChange={ (e) => setFilterByName({ name: e.target.value }) }
      />
    </div>
  );
};

export default FieldSearch;
