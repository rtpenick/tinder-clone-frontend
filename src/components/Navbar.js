import React from 'react'

import whiteLogo from '../images/tinder_logo_white.png'
import colorLogo from '../images/color-logo-tinder.png'


const Navbar = ({minimal, authToken, showModal, setShowModal, setIsSignUp}) => {
  // const minimal = true
  const handleClick = () => {
    setShowModal(true)
    setIsSignUp(false)
  }
  return (
    <nav>
      <div className='logo-container'>
        <img
          className='logo'
          src={minimal ? colorLogo : whiteLogo}
          alt='logo'
        />
      </div>

      {!authToken && !minimal && <button 
              className='nav-button'
              onClick={handleClick}
              disabled={showModal}
              >Log in</button>}
    </nav>
  )
}

export default Navbar