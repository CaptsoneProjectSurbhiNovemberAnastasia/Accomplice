import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark navbar-expand-md bg-success bg-color justify-content-between">
        <div className="container-fluid flexwrap">
          <div className="navbar-collapse dual-nav  order-0 ">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/profile" className="nav-link">
                  <i className="fa fa-user" />
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink
            to="/suggestedmatches"
            className="navbar-brand mx-auto d-block text-center order-1 "
          >
            Accomplice
          </NavLink>
          <div className="navbar-collapse dual-nav order-2">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to="/matches" className="nav-link">
                  <i className="fa fa-comment" />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
