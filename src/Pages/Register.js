import React, { useState } from 'react'
import Add from '../img/icon.jpg'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'

const Register = () => {

  const handleSubmit = async (e) => {

    const [err, setErr] = useState(false)

    e.preventDefault()
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].value;

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
    } catch (err) {
      setErr(true)
    }
  }
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Lama Chat</span>
        <span className='title'>Register</span>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Name'></input>
          <input type='email' placeholder='Email'></input>
          <input type='password' placeholder='Password'></input>
          <input type='file' id='file' style={{ display: "none" }} placeholder='File'></input>
          <label htmlFor='file'>
            <img src={Add} alt='' />
            <span>Add an Avatar</span>
          </label>
          <button>Sign Up</button>
          {err && <span>Something Went Wrong</span>}
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  )
}

export default Register