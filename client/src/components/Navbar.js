import React, { useState, useEffect } from 'react'
import { debounce } from '../helpers/helpers.js'


const Navbar = () => {

  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const navbarStyles = {
    position: 'fixed',
    height: '40px',
    width: '100%',
    color: 'white',
    backgroundColor: 'black',
    textAlign: 'center',
    transition: 'top 0.6s',
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

  return <div className="navbar" style={{ ...navbarStyles, top: visible ? '0' : '-40px' }}>Home</div>

}

export default Navbar

