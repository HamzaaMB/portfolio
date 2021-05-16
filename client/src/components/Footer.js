import React from 'react'
import { BiMailSend } from 'react-icons/bi'
import { FaGithub } from 'react-icons/fa'
import { SiLinkedin } from 'react-icons/si'
import CopyMailTo from 'react-copy-mailto'

const Footer = () => {

  return (
    <>
      <footer id="contact">
        <div className="contact-bottom">
          <div className="interest-container">
            <h2 className="interest-title">Interests</h2>
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
            <h2 className="contact-title">contact</h2>
            <div className="contact-box">
              <div className="email-box">
                <div className="email-icon">
                  <BiMailSend />
                </div>
                <div className="email">
                  <CopyMailTo email="Hamzambutt1@gmail.com" />
                </div>
              </div>
              <div className="github-box">
                <a rel="noreferrer" target="_blank" href="https://github.com/hamzaaMB">
                  <div className="github-icon">
                    <FaGithub />
                  </div>
                  <div className="github">
                  GitHub
                  </div>
                </a>
              </div>
              <div className="linkedin-box">
                <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/hamzambutt/">
                  <div className="link-icon">
                    <SiLinkedin />
                  </div>
                  <div className="linkedin">
                  Linkedin
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

{/* <div className="linkedin-box">
<a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/hamzambutt/">
  <div className="linkedin-icon">
    <SiLinkedin/>
  </div>
  <div className="linkedin">
  Linkedin
  </div>
</a>
</div> */}