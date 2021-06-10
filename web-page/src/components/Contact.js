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

          <div className="githubMain">
            <a href="https://github.com/Part-Time-Devs"> <img className="contactImg" src={PTDevImg} alt="PTDevsLogo" /> </a>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere fermentum enim, id scelerisque leo finibus a. <br/> Curabitur pulvinar cursus finibus. Duis varius tellus ut bibendum aliquam. Curabitur nec hendrerit felis, vel hendrerit ligula. </p>
            <div className="github">
               <a href="https://github.com/BrandonWorobi">  <img className="octocat" src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="Brandon W" /> </a>
               <a href="https://github.com/Rory-Ray"> <img className="octocat" src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="Rory" /> </a>
               <a href="https://github.com/bverfurth"> <img className="octocat" src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="Brandon V" /> </a>
               <a href="https://github.com/irasanchez"> <img className="octocat" src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="Ira" /> </a>
               <a href="https://github.com/SelfCheckout94"> <img className="octocat" src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="Chris" /> </a>
               <a href="https://github.com/SethBlakley"> <img className="octocat" src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="Seth" /> </a>
               <a href="https://github.com/TracyB85"> <img className="octocat" src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="Tracy" /> </a>
               <a href="https://github.com/JamariaSims"> <img className="octocat" src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="Jamaria" /> </a>
            </div>
          </div>



        </div>
    )
}

export default Contact
