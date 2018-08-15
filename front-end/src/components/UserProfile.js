import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../store'
import UserProfileForm from './UserProfileForm'

class UserProfile extends Component {
  render() {
    const {user} = this.props

    if (user && !user.id) {
      return null
    }
    return (
      <div className="container">
        <div className="row profile_box">
          <div>
            <div className="outter">
            <img src={user.imageUrl} alt="" className="image-circle"/>
            </div>
              <h2>Hi {user.firstName}</h2>
          </div>
          <UserProfileForm user={user} handleSubmit={this.props.handleSubmit} handleClick={this.props.handleClick}/>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    },
    handleSubmit(evt) {
      evt.preventDefault()
      //ADD UPDATE USER PROFILE THUNK
    }
  }
}

export default connect(mapState, mapDispatch)(UserProfile)

