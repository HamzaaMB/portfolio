import React from 'react'

const Projects = () => {

  return (
    <>
      <section className="projects">
        <h2 className="project-title">Projects</h2>
        <div className="project-container">
          <div className="project-container-top">
            
            <div className="project-one">
              <div className="item">
                <div className="polaroid"><img alt="" src="./screenshots/Begin.png"/>
                  <div className="caption">Zeus Invades</div>
                </div>
              </div>
            </div>
            <div className="project-two">
              <div className="item">
                <div className="polaroid"><img alt="" src="./screenshots/homepage.png"/>
                  <div className="caption">Is It Worth It?</div>
                </div>
              </div>
            </div>
          </div>
          <div className="project-container-bottom">
            <div className="project-three">
              <div className="item">
                <div className="polaroid"><img alt="" src="./screenshots/homepage1.png"/>
                  <div className="caption">Icelander</div>
                </div>
              </div>
            </div>
            <div className="project-four">
              <div className="item">
                <div className="polaroid"><img alt="" src="./screenshots/homepage2.png"/>
                  <div className="caption">TrackMyCal</div>
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