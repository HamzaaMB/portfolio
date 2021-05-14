import React from 'react'

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
                  <div className="caption">TrackMyCal</div>
                </div>
              </div>
              <p className="project-desription">Dummy text</p>
              <div className="project-tech">
                Tech used
              </div>
              <a rel="noreferrer" target="_blank" href="https://trackmycal.herokuapp.com/"><button className="project-link">project link</button></a>
              <a rel="noreferrer" target="_blank" href="https://github.com/HamzaaMB/SEI-project-four"><button className="github-link">github</button></a>
            </div>
            <div className="project-three">
              <div className="item">
                <div className="polaroid"><img alt="" src="./screenshots/homepage1.png"/>
                  <div className="caption">Icelander</div>
                </div>
              </div>
              <p className="project-desription">Dummy text</p>
              <div className="project-tech">
                Tech used
              </div>
              <a rel="noreferrer" target="_blank" href="https://icelander.netlify.app/"><button className="project-link">project link</button></a>
              <a rel="noreferrer" target="_blank" href="https://github.com/HamzaaMB/SEI-Project-Three"><button className="github-link">github</button></a>
            </div>
          </div>
          <div className="project-container-bottom">
            <div className="project-two">
              <div className="item">
                <div className="polaroid"><img alt="" src="./screenshots/homepage.png"/>
                  <div className="caption">Is It Worth It?</div>
                </div>
              </div>
              <p className="project-desription">Dummy text</p>
              <div className="project-tech">
                Tech used
              </div>
              <a rel="noreferrer" target="_blank" href="https://isitworthit-hb.netlify.app/"><button className="project-link">project link</button></a>
              <a rel="noreferrer" target="_blank" href="https://github.com/HamzaaMB/IsItWorthIt"><button className="github-link">github</button></a>
            </div>
            <div className="project-one">
              <div className="item">
                <div className="polaroid"><img alt="" src="./screenshots/Begin.png"/>
                  <div className="caption">Zeus Invades</div>
                </div>
              </div>
              <p className="project-desription">Dummy text</p>
              <div className="project-tech">
                Tech used
              </div>
              <a rel="noreferrer" target="_blank" href="https://hamzaamb.github.io/SEI-project-one/"><button className="project-link">project link</button></a>
              <a rel="noreferrer" target="_blank" href="https://github.com/HamzaaMB/SEI-project-one"><button className="github-link">github</button></a>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Projects