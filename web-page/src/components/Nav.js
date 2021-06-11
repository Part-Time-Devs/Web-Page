import React from 'react'
import '../css/Nav.css'
import PTDevImg from "../content/PTD.png"
import { Link } from 'react-router-dom'
import  socialMediaAuth  from "../auth"
import { githubProvider } from '../authMethods'

function Nav() {
  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
  }
    return (
        <div className="navContainer">
          <nav>
            <button onClick={() => handleOnClick(githubProvider)}> Sign In </button>
            <img className="navImg" src={PTDevImg} alt="PTDevLogo" />
              <Link className="button" to="/">  Home </Link>
              <Link className="button" to="/feed"> Feed </Link>
              <Link className="button" to="/about"> About </Link>
              <Link className="button" to="/contact"> Contact </Link>
          </nav>
        </div>
    )
}

export default Nav
