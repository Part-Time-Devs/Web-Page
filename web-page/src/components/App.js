import React, { Component } from 'react';
import Nav from "./Nav.js"
import Home from "./Home.js"
import About from "./About.js"
import Feed from "./Feed.js"
import Contact from "./Contact"
import Login from "./Login"
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

          <Route path="/feed">
            <Feed />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
    </div>
      )
}

export default App;
