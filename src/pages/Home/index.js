import React from 'react'
import {useState, useEffect} from 'react'
import AuthModal from '../../components/AuthModal'
import Navbar from '../../components/Navbar'

const Index = () => {
    const [showModal, setShowModal] = useState(false)
    const [isSignUp, setIsSignUp] = useState(true) // not is SIGNED UP

    const authToken = false
    
    const handleClick = () => {
      setShowModal(true)
      setIsSignUp(true)
    }


  return (
   <div className='overlay'>
     <Navbar 
      minimal={false} 
      authToken={authToken} 
      showModal={showModal} 
      setShowModal={setShowModal}
      setIsSignUp={setIsSignUp}
     />
     
     <div className='home'>
        <h1>Swipe Right®</h1>

        <button className='primary-button' onClick={handleClick}>
            { authToken ? 'Signout' : 'Create account'}
        </button>

        {showModal && (
          <AuthModal setShowModal={setShowModal} isSignUp={isSignUp} setIsSignUp={setIsSignUp}/>
        )}
     </div>
   </div>
  )
}

export default Index