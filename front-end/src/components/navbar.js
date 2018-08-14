import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark navbar-expand-md bg-success justify-content-between">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target=".dual-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-collapse collapse dual-nav w-50 order-1 order-md-0">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="">
                  <i className="fa fa-user" />
                </a>
              </li>
            </ul>
          </div>
          <a
            href="/"
            className="navbar-brand mx-auto d-block text-center order-0 order-md-1 w-25"
          >
            Accomplice
          </a>
          <div className="navbar-collapse collapse dual-nav w-50 order-2">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="">
                  <i className="fa fa-comment" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
