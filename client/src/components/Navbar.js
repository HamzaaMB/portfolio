import React, { useState, useEffect } from 'react'
import { debounce } from '../helpers/helpers.js'
import { Link } from 'react-scroll'


const Navbar = () => {

  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const navbarStyles = {
    position: 'fixed',
    height: '40px',
    width: '100%',
    color: 'white',
    backgroundColor: 'black',
    borderBottom: '2px solid #8F754F',
    textAlign: 'center',
    transition: 'top 0.6s',
    zIndex: '1',
  }

  const handleScroll = debounce(() => {
    //find current scroll position
    const currentScrollPos = window.pageYOffset

    //set state based on location info
    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10)

    //set state to new scroll positions
    setPrevScrollPos(currentScrollPos)

  }, 100)
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return  () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos, visible, handleScroll])

  return <div className="navbar" style={{ ...navbarStyles, top: visible ? '0' : '-40px' }}>
    <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-evenly' }}>
      <li><Link activeClass="active" to="home" spy={true} smooth={true}><a href="/">Home</a></Link></li>
      <li><Link  to="about" spy={true} smooth={true}><a href="/">About</a></Link></li>
      <li><Link  to="projects" spy={true} smooth={true}><a href="/">Projects</a></Link></li>
      <li><Link  to="contact" spy={true} smooth={true}><a href="/">Contact</a></Link></li>
    </ul>
  </div>
}

export default Navbar

