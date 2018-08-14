import React, { Component } from 'react'
import Navbar from './navbar'
import InputQuestion from './inputQuestion'

class User extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <InputQuestion />
      </div>
    )
  }
}

export default User
