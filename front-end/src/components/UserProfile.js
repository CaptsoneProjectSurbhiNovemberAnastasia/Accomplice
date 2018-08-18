import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../store'
import { updateUser } from '../store/user'
import UserProfileForm from './UserProfileForm'

class UserProfile extends Component {
  render() {
    const { user } = this.props

    if (user && !user.id) {
      return null
    }
    return (
      <div className="form nopadding">
        <div className="form">
          <div className=" ">
            <img src={user.imageUrl} alt="" />
            <h2>Hi {user.firstName}</h2>
          </div>
          <div className="">
            <UserProfileForm
              user={user}
              handleSubmit={this.props.handleSubmit}
              handleClick={this.props.handleClick}
            />
          </div>
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
    handleClick(evt) {
      evt.preventDefault()
      dispatch(logout())
    },
    handleSubmit(evt, user) {
      const id = user.id
      evt.preventDefault()
      const firstName = evt.target.firstName.value
      const lastName = evt.target.lastName.value
      const age = evt.target.age.value
      const imageUrl = evt.target.imageUrl.value
      const description = evt.target.description.value

      dispatch(
        updateUser({
          id,
          firstName,
          lastName,
          imageUrl,
          age,
          description
        })
      )
    }
  }
}

export default connect(
  mapState,
  mapDispatch
)(UserProfile)
