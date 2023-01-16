import React from 'react';
import NavBar from './Components/navBar/NavBar';
import './App.css';
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/RowPost/Rowpost';
function App() {
  return (
    <div>
      <NavBar />
      <Banner/>
      <Rowpost/>
      <Rowpost/>
    </div>
  );
}

export default App;
