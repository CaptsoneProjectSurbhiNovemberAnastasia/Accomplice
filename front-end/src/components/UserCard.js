import React, { Component } from 'react'
import { connect } from 'react-redux'
import { matchWith } from '../store'

class UserCard extends Component {
  handleClick = evt => {
    evt.preventDefault()
    this.props.matchWithUser(+this.props.user.id)
  }
  render() {
    const { user } = this.props
    // console.log('User is', user)
    return (
      <div id="userCard" className="collapsed">
        <div>
          <div id="picContainer">
            <img className="userPic rounded" src={user.imageUrl} />
          </div>
          <li>
            <h4>{user.firstName + ' ' + user.lastName}</h4>
            <p>{user.description}</p>

            <button onClick={this.handleClick}>Match!</button>
          </li>
        </div>
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  matchWithUser: id => dispatch(matchWith(id))
})
export default connect(
  null,
  mapDispatch
)(UserCard)
