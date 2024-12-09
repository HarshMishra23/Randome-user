import React from 'react'
import './style.css'


const UserCard = ({firstName, lastName, gender}) => {
  return (
    <div className='card'>
        <p>Name -{firstName} {lastName}</p>
        <p>Gender :{gender}</p>
    </div>
  )
}

export default UserCard