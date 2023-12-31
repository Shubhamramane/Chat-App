import React, { useState } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase'

const Search = () => {

  const [username, setUsername] = useState('')
  const [user, setUser] = useState('')
  const [err, setErr] = useState('')

  const handleSearch = async () => {
    const q = query(collection(db, 'users'), where('displayName', '==', username))

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      setErr(true)
    };
  };

  const handlekey = (e) => {
    e.code === "Enter" && handleSearch()
  }
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='Find a user' onKeyDown={handlekey} onChange={e => { setUsername(e.target.value) }} />
      </div>
      {err && <span>User not found!</span>}
      {
        user && <div className='userChat'>
          <img src={user.photoURL} alt='' />
          <div className='userChatInfo'>
            <span>{user.displayName}</span>
          </div>
        </div>
      }

    </div>
  )
}

export default Search