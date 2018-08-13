import React from 'react'

const UserCard = props => {
  const { user } = props
  return (
    <li>
      <h4>{user.firstName + ' ' + user.lastName}</h4>
      <p>{user.description}</p>
    </li>
  )
}

export default UserCard
