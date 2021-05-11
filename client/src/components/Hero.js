import React from 'react'
import { Link } from 'react-scroll'


const Hero = () => {



  return (
    <>
      <section id="home" className="hero">
        <div className="hero-container">
          <h1 className="hero-name">hamza butt</h1>
          <h2 className="hero-title">software engineer</h2>
        </div>
        <div className="hero-scroll">
          <div className="arrow bounce">
            <a className="arrow-down" href="/"><Link  to="about" spy={true} smooth={true}>Scroll</Link></a>
          </div>
        </div>
      </section>
    </>

  )
}


export default Hero