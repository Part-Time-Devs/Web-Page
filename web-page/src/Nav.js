import React from 'react'
import './Nav.css'
import PTDevImg from "./content/PTD.png"

function Nav() {
    return (
        <div className="navContainer">
          <nav>
            <img className="navImg" src={PTDevImg} alt="PTDevLogo" />
              <button> <a href="#"> Home </a> </button>
              <button> <a href="#"> About </a> </button>
              <button> <a href="#"> Curriculum </a> </button>
              <button> <a href="#"> Contact </a> </button>
          </nav>
        </div>
    )
}

export default Nav
