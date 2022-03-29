import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const res = axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151');
  return <div className="App" />;
}

export default App;
