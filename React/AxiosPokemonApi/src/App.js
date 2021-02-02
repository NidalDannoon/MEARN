import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FetchPokemonButton from "./components/FetchPokemonButton"

function App() {
  const [pokemon, setPokemon] = useState([])

  return (
    <div className="App container">
      <FetchPokemonButton pokemon={ pokemon } setPokemon={ setPokemon } />
    </div>
  );
}

export default App;
