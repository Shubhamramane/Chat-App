import React from 'react'
import Camera from '../img/video-camera.png'
import Add from '../img/add-friend.png'
import More from '../img/menu.png'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>John</span>
        <div className='chatIcon'>
          <img src={Camera} alt='' />
          <img src={Add} alt='' />
          <img src={More} alt='' />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat