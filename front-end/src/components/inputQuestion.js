import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
// import { fetchUsers } from '../store/action-creators.js'

// import userIcon from './user-regular.svg'
// import chatIcon from './comment-regular.svg'

class InputQuestion extends Component {
  render() {
    const { handleSubmit } = this.props
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
            <button
              type="submit"
              onClick={() => {
                type = 'go'
              }}
            >
              Go
            </button>
          </div>
        </form>
      </div>
    )
  }
}

const mapState = state => ({
  error: state.user.error,
  user: state.user,
})

const mapDispatch = (dispatch, ownProps) => ({
  async handleSubmit(evt, type) {
    // evt.preventDefault()
    // const email = evt.target.email.value
    // const password = evt.target.password.value
    // const redirect = type === 'login' ? '/user' : '/createProfile'
    // const thunk = await fetchUsers()
    // await dispatch(thunk)
    //ownProps.history.push(`/:id/suggestedMatches`)
  },
})

export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(InputQuestion)
)
