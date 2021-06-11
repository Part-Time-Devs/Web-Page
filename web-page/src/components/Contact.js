import React from 'react'
import "../css/Contact.css"
import PTDevImg from "../content/Part Time Devs Logo Final Files.png"
import OctoChris from "../content/chris-boyle-octocat.png"
import OctoAlex from "../content/78587883.png"
import OctoBrandon from "../content/BWOctocat.png"
import {Helmet} from 'react-helmet'


function Contact() {
    return (
        <div className="contact">
          <Helmet>
                <style>{'body { background-color: black; }'}</style>
            </Helmet>

          <div className="discord">
            <iframe src="https://discord.com/widget?id=845428075475107890&theme=dark" width="500" height="800" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
            </iframe>

            <div className="githubMain">
              <a href="https://github.com/Part-Time-Devs"> <img className="contactImg" src={PTDevImg} alt="PTDevsLogo" /> </a>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere fermentum enim, id scelerisque leo finibus a. <br/> Curabitur pulvinar cursus finibus. Duis varius tellus ut bibendum aliquam. Curabitur nec hendrerit felis, vel hendrerit ligula. </p>
              <div className="github">
                 <a href="https://github.com/BrandonWorobi">  <img className="octocatBrandon" src={OctoBrandon} alt="Brandon W" /> </a>
                 <a href="https://github.com/Rory-Ray"> <img className="octocat" src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="Rory" /> </a>
                 <a href="https://github.com/bverfurth"> <img className="octocat" src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="Brandon V" /> </a>
                 <a href="https://github.com/irasanchez"> <img className="octocat" src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="Ira" /> </a>
                 <a href="https://github.com/SelfCheckout94"> <img className="octocat" src={OctoChris} alt="Chris" /> </a>
                 <a href="https://github.com/SethBlakley"> <img className="octocat" src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="Seth" /> </a>
                 <a href="https://github.com/TracyB85"> <img className="octocat" src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="Tracy" /> </a>
                 <a href="https://github.com/JamariaSims"> <img className="octocat" src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="Jamaria" /> </a>
                 <a href="https://github.com/omtmn"> <img className="octocat" src={OctoAlex} alt="Alex" /> </a>
              </div>
            </div>
          </div>





        </div>
    )
}

export default Contact
