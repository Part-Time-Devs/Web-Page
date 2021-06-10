import React from 'react';
import Nav from "./Nav.js"
import Body from "./Body.js"
import PTDevs from "./content/Part Time Devs 3D Mockup.jpg";
import './App.css';

function App() {
  return (
    <div className="app">
      <Nav />
      <Body />
      <img className="appImg" src={PTDevs} alt="PTDevLogo" />
    </div>
  );
}

export default App;
