import React, { Component } from 'react'


class Navbar extends Component {
  render () {
    return (
      <div>
        <nav className="navbar fixed-bottom navbar-light bg-light">
          <a className="navbar-brand" href="#">Fixed bottom</a>
        </nav>
      </div>
    )
  }
}

export default Navbar
