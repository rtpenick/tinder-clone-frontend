import React, {useState} from 'react'

const AuthModal = ({setShowModal, isSignUp, setIsSignUp}) => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const [error,setError] = useState("")

    // setIsSignUp (false)

    const handleSubmit = (e) => {
      e.preventDefault()


      try {
        if(isSignUp && (password !== confirmPassword)){
          setError('Passwords need to match')
        }

        console.log('Make a post request to db')
      } catch (error) {
        console.log(error)
      }
    }

    const handleClick = () => {
        setShowModal(false)
    }



  return (
    <div className='auth-modal'>
        <div className="close-icon" onClick={handleClick}>x</div>
        <h2>{isSignUp ? 'Create Account' : 'Log In'}</h2>
        <p>By clicking Log In, you agree to our Terms. Learn how we process your data in our Privacy Policy and Cookie Policy</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required={true}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required={true}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          { isSignUp && <input
            type="password"
            id="password-check"
            name="password-check"
            placeholder="Confirm Password"
            required={true}
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />}

          {/* <button className='secondary-button'>Submit</button> */}
          <input type="submit" className='secondary-button'/>
          <p>{error}</p>
        </form>

        <hr/>
        <h2>GET THE APP</h2>

    </div>
  )
}

export default AuthModal