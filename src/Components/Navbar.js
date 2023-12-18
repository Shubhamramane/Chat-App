import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Lama</span>
      <div className='user'>
        <img src='https://rubuen.weebly.com/uploads/6/1/2/5/61257037/s715340680631163983_p1_i1_w262.jpeg' alt=''/>
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar