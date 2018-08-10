import React, { Component } from 'react'
import userIcon from './user-regular.svg'
import chatIcon from './comment-regular.svg'

class Navbar extends Component {
  render () {
    return (
      <div className="nav-container">
        <nav className="navbar justify-content-center sticky-top navbar-expand-lg navbar-light text-center" >
          <img className="icon" src={chatIcon}/>
          <img className="icon" src={userIcon}/>
          <a className="navbar-brand text-light font-weight-bold" href="#">Accomplice</a>
        </nav>
      </div>
    )
  }
}

export default Navbar
