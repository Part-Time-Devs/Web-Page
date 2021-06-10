import React from 'react'
import "../css/Contact.css"
import PTDevImg from "../content/Part Time Devs Logo Final Files.png"


function Contact() {
    return (
        <div className="contact">
          <div className="discord">
            <iframe src="https://discord.com/widget?id=845428075475107890&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
            </iframe>
          </div>
          <div className="github">
            <a href="https://github.com/Part-Time-Devs"> <img className="contactImg" src={PTDevImg} alt="PTDevsLogo" /> </a>
            <a href="https://github.com/BrandonWorobi">  <img src="" alt="Brandon W" /> </a>
            <a href="https://github.com/Rory-Ray"> <img src="" alt="Rory" /> </a>
            <a href="https://github.com/bverfurth"> <img src="" alt="Brandon V" /> </a>
            <a href="https://github.com/irasanchez"> <img src="" alt="Ira" /> </a>
            <a href="https://github.com/SelfCheckout94"> <img src="" alt="Chris" /> </a>
            <a href="https://github.com/SethBlakley"> <img src="" alt="Seth" /> </a>
            <a href="https://github.com/TracyB85"> <img src="" alt="Tracy" /> </a>
            <a href="https://github.com/JamariaSims"> <img src="" alt="Jamaria" /> </a>
          </div>
        </div>
    )
}

export default Contact
