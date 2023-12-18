import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='Find a user' />
      </div>
      <div className='userChat'>
        <img src='https://rubuen.weebly.com/uploads/6/1/2/5/61257037/s715340680631163983_p1_i1_w262.jpeg' alt='' />
        <div className='userChatInfo'>
          <span>John</span>
        </div>
      </div>
    </div>
  )
}

export default Search