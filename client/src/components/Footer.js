import React from 'react'
import { BiMailSend } from 'react-icons/bi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {

  return (
    <>
      <footer id="contact">
        <div className="contact-top"><h2 className="interest-title">Interests</h2><h2 className="contact-title">contact</h2></div>
        <div className="contact-bottom">
          <div className="interest-container">
            <div className="image-box-container">
              <div className="image-box">
                <img src='./screenshots/travel.png.jpg' alt="travel" />
                <div className="text">
                  <h4>travel</h4>
                </div>
              </div>
              <div className="image-box">
                <img src='./screenshots/photography.png' alt="photography" />
                <div className="text">
                  <h4>photography</h4>
                </div>
              </div>
              <div className="image-box">
                <img src='./screenshots/gaming.jpeg' alt="gaming" />
                <div className="text">
                  <h4>gaming</h4>
                </div>
              </div>
              <div className="image-box">
                <img src='./screenshots/reading.jpeg' alt="reading" />
                <div className="text">
                  <h4>reading</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-container">
            <div className="email">Hamzambutt1@gmail.com <BiMailSend /></div>
            <div className="linkedin"><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/hamzambutt/">Linkedin <FaLinkedin /></a></div>
            <div className="github"><a rel="noreferrer" target="_blank" href="https://github.com/hamzaaMB">GitHub <FaGithub /></a></div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer