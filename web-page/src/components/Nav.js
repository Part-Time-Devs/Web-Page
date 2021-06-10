import React from 'react'
import '../css/Nav.css'
import PTDevImg from "../content/PTD.png"
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className="navContainer">
          <nav>
            <img className="navImg" src={PTDevImg} alt="PTDevLogo" />
              <Link className="button" to="/">  Home </Link>
              <Link className="button" to="/about"> About </Link>
              <Link className="button" to="/curriculum"> Curriculum </Link>
              <Link className="button" to="/contact"> Contact </Link>
          </nav>
        </div>
    )
}

export default Nav
