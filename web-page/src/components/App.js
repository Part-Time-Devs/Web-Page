import React from 'react';
import Nav from "./Nav.js"
import Home from "./Home.js"
import About from "./About.js"
import Curriculum from "./Curriculum.js"
import Contact from "./Contact"
import PTDevs from "../content/Part Time Devs Logo Final Files-01.jpg";
import { Route } from 'react-router-dom';
import '../css/App.css';


function App() {
  return (
    <div className="app">
      <Nav />
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/curriculum">
        <Curriculum />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>
    </div>
  );
}

export default App;
