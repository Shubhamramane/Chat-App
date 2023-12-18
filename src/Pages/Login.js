import React from 'react'
import Add from '../img/icon.jpg'

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Lama Chat</span>
            <span className='title'>Register</span>
            <form>
                <input type='email' placeholder='Email'></input>
                <input type='password' placeholder='Password'></input>
                <button>Sign In</button>
            </form>
            <p>You don't have an account? Register</p>
        </div>
    </div>
  )
}

export default Register