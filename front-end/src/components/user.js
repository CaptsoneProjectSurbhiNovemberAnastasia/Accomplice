import React, { Component } from 'react'
import Navbar from './navbar'
import InputQuestion from './inputQuestion'
// import userIcon from './user-regular.svg'
// import chatIcon from './comment-regular.svg'

class User extends Component {
  render() {
    console.log('Inside User ******')
    return (
      <div>
        <Navbar />
        {/* <h1>Inside User Page</h1> */}
        <InputQuestion />
      </div>
    )
  }
}

export default User
