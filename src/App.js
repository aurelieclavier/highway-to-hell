import React from 'react';
import FilmList from './components/pageFilm/FilmList' //import de test
import Carousel from './components/pageFilm/Carousel' // import de test

import './App.css';

function App() {
  return (
    <div className="App">
      <Carousel />
      <FilmList />
    </div>
  );
}

export default App;
