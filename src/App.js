import React from 'react';
import './App.css';
import Table from './components/Table';
import Header from './components/Header';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <div>
      <span>Star Wars Planets!</span>
      <PlanetsProvider>
        <Header />
        <Table />
      </PlanetsProvider>
    </div>
  );
}

export default App;
