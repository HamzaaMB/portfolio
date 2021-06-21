import React from 'react'
import { Link } from 'react-scroll'
import { FaArrowDown } from 'react-icons/fa'


const Hero = () => {



  return (
    <>
      <section id="home" className="hero">
        <div className="hero-container">
          <h1 className="hero-name">hamza butt</h1>
          <div className="bottom-title">
            <h2 className="hero-title">Developer</h2><h2 className="hero-title">Traveller</h2><h2 className="hero-title">Mathematician</h2>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="arrow bounce">
            <a className="arrow-down" href="/"><Link  to="about" spy={true} smooth={true}><FaArrowDown /></Link></a>
          </div>
        </div>
      </section>
    </>

  )
}


export default Hero