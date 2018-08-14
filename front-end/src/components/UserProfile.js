import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../store'

class UserProfile extends Component {
  render() {
    const {handleClick} = this.props

    return (
      <div>
        <button type="button" onClick={handleClick}>Logout</button>
      </div>
    )
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(UserProfile)

