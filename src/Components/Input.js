import React from 'react'
import Attachment from '../img/attachment.png'
import Image from '../img/image.png'

const Input = () => {
  return (
    <div className='input'>
      <input type='text' placeholder='Type something...' />
      <div className='send'>
        <img src={Attachment} alt='' />
        <input type='file' style={{ display: "none" }} id='file' />
        <label htmlFor='file'>
          <img src={Image} alt='' />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input