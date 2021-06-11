import React from 'react'
import '../css/Home.css'
import PTDevs from "../content/Part Time Devs 3D Mockup.jpg";
import PTDevs2 from "../content/PTD.png"
import PTDevs3 from "../content/AdobeStock_278335772.jpeg"
import PTDevs4 from "../content/Part Time Devs Logo Final Files.png"
import  socialMediaAuth  from "../auth"
import { githubProvider } from '../authMethods'



function Home() {
  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
  }
    return (
        <div className="home">
          <button className="signUp" onClick={() => handleOnClick(githubProvider)}> Sign In </button>
        </div>
    )
}

export default Home
