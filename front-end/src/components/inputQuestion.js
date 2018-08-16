import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import CurrentLocation from './currentLocation'

class InputQuestion extends Component {
  render() {
    const { handleSubmit, user } = this.props
    let type
    return (
      <div>
        <form onSubmit={event => handleSubmit(event, type)}>
          <div className="group">
            <label htmlFor="question">
              <small>what would you like to do today ?</small>
            </label>
            <input name="question" type="text" placeholder="e.g. Hiking" />
          </div>

          <div className="group">
            <NavLink to={`/user/${user.id}/suggestedmatches`}>GO</NavLink>
          </div>
          <div>
            <label htmlFor="question">
              <NavLink to="/undecided">Don't know... get a clue!!</NavLink>
            </label>
          </div>
        </form>
        <CurrentLocation />
      </div>
    )
  }
}

const mapState = state => ({
  error: state.user.error,
  user: state.user
})

export default withRouter(
  connect(
    mapState,
    null
  )(InputQuestion)
)
