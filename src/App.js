import React from 'react';
import NavBar from './Components/navBar/NavBar';
import './App.css';
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/RowPost/Rowpost';
import {originals,action,comedyMovies,documentaries,horrorMovies,romanceMovies,trending} from './urls'
function App() {
  return (
    <div>
      <NavBar />
      <Banner/>
      <Rowpost url={originals} title="Netflix Originals"/>
      <Rowpost url={trending} title="Trending" isSmall/>
      <Rowpost url={action} title="Action" isSmall/>
      <Rowpost url={comedyMovies} title="Comedy" isSmall/>
      <Rowpost url={romanceMovies} title="Romance" isSmall/>
      <Rowpost url={horrorMovies} title="Horror" isSmall/>
      <Rowpost url={documentaries} title="Documentaries" isSmall/>
    </div>
  );
}

export default App;
