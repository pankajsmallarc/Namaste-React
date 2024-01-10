import React from 'react'

const User = ({name}) => {
  return (
    <div className='user_card'>
      <h2>{name}</h2>
      <h3>Location:Firozabad</h3>
      <h4>Contact:@pankaj7</h4>
    </div>
  )
}

export default User
