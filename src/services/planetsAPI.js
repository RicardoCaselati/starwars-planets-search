const fetchPlanets = async () => {
  try {
    const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const json = await request.json();
    return json.results;
  } catch (error) {
    console.log(`Algo deu errado:( \n${error}`);
  }
};

export default fetchPlanets;
