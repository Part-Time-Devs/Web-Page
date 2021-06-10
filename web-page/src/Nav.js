import React from 'react'
import './css/Nav.css'

function Nav() {
    return (
        <div className="navContainer">
          <nav>
            <button> <a href="#"> Home </a> </button>
            <button> <a href="#"> About </a> </button>
            <button> <a href="#"> Curriculum </a> </button>
            <button> <a href="#"> Contact </a> </button>
          </nav>
        </div>
    )
}

export default Nav
