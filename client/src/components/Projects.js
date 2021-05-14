import React from 'react'
import { SiJavascript, SiReact, SiPython, SiPostgresql, SiHtml5, SiYarn, SiGit, SiMongodb, SiNodeDotJs, SiCss3, SiGithub } from 'react-icons/si'
import { DiDjango, DiSass } from 'react-icons/di'
import { GoDeviceDesktop } from 'react-icons/go'

const Projects = () => {

  return (
    <>
      <section id="projects" className="projects">
        <h2 className="project-title">Projects</h2>
        <div className="project-container">
          <div className="project-container-top">
            <div className="project-four">
              <div className="item">
                <div className="polaroid"><img alt="" src="./screenshots/homepage2.png"/>
                </div>
              </div>
              <div className="info-container">
                <div className="project-name">TrackMyCal</div>
                <p className="project-description">Full-Stack app with a Python, Django, and PostgreSQL back-end and a React front-end. The idea is based around one of my favourite apps (myfitnesspal) which is designed to keep track of food the user inputs into their logbook and their calories.</p>
                <div className="project-tech">
                  <div className="tech">Created with -</div><div className="project-icons"><SiJavascript /><SiReact /><SiPython /><DiDjango /><SiPostgresql /><SiHtml5 /><DiSass /><SiYarn /><SiGit /></div>
                </div>
                <div className="live-buttons">
                  <button className="project-link"><a rel="noreferrer" target="_blank" href="https://trackmycal.herokuapp.com/"><GoDeviceDesktop /> Live</a></button>
                  <button className="github-link"><a rel="noreferrer" target="_blank" href="https://github.com/HamzaaMB/SEI-project-four"><SiGithub /> GitHub</a></button>
                </div>
              </div>
            </div>
            <div className="project-three">
              <div className="item">
                <div className="polaroid"><img alt="" src="./screenshots/homepage1.png"/>
                </div>
              </div>
              <div className="info-container">
                <div className="project-name">Icelander</div>
                <p className="project-description">Built using React with Node.js, Express and MongoDB. An app that allows users to plan a trip to Iceland by selecting pre-built packages, which then displays all the data on Mapbox. Full-Stack MERN application using our own RESTful API.</p>
                <div className="project-tech">
                  <div className="tech">Created with -</div><div className="project-icons"><SiJavascript /><SiReact /><SiNodeDotJs /><SiMongodb /><SiHtml5 /><DiSass /><SiYarn /><SiGit /></div>
                </div>
                <div className="live-buttons">
                  <button className="project-link"><a rel="noreferrer" target="_blank" href="https://icelander.netlify.app/"><GoDeviceDesktop /> Live</a></button>
                  <button className="github-link"><a rel="noreferrer" target="_blank" href="https://github.com/HamzaaMB/SEI-Project-Three"><SiGithub /> GitHub</a></button>
                </div>
              </div>
            </div>
          </div>
          <div className="project-container-bottom">
            <div className="project-two">
              <div className="item">
                <div className="polaroid"><img alt="" src="./screenshots/homepage.png"/>
                </div>
              </div>
              <div className="info-container">
                <div className="project-name">Is It Worth It?</div>
                <p className="project-description">48 hour hackathon - built a React Hooks app using two third-party APIs (RESTCountries and TravelBriefing.org), which offers travel advice to the user based on the country they want to visit. This project taught me the value of collaboration, being able to share our different strengths and skills. </p>
                <div className="project-tech">
                  <div className="tech">Created with -</div><div className="project-icons"><SiJavascript /><SiReact /><SiHtml5 /><SiCss3 /><SiYarn /></div>
                </div>
                <div className="live-buttons">
                  <button className="project-link"><a rel="noreferrer" target="_blank" href="https://isitworthit-hb.netlify.app/"><GoDeviceDesktop /> Live</a></button>
                  <button className="github-link"><a rel="noreferrer" target="_blank" href="https://github.com/HamzaaMB/IsItWorthIt"><SiGithub /> GitHub</a></button>
                </div>
              </div>
            </div>
            <div className="project-one">
              <div className="item">
                <div className="polaroid"><img alt="" src="./screenshots/Begin.png"/>
                </div>
              </div>
              <div className="info-container">
                <div className="project-name">Zeus Invades</div>
                <p className="project-description">Built out a grid-based version of space invaders in vanilla JavaScript, HTML and CSS. Strengthened my JS fundamental skills, as well as getting more familiar with HTML and styling on CSS.</p>
                <div className="project-tech">
                  <div className="tech">Created with -</div><div className="project-icons"><SiJavascript /><SiHtml5 /><SiCss3 /></div>
                </div>
                <div className="live-buttons">
                  <button className="project-link"><a rel="noreferrer" target="_blank" href="https://hamzaamb.github.io/SEI-project-one/"><GoDeviceDesktop /> Live</a></button>
                  <button className="github-link"><a rel="noreferrer" target="_blank" href="https://github.com/HamzaaMB/SEI-project-one"><SiGithub /> GitHub</a></button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Projects