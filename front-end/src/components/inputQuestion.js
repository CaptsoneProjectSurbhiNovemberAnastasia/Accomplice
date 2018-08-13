import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { fetchUsers } from '../store/action-creators.js'

// import userIcon from './user-regular.svg'
// import chatIcon from './comment-regular.svg'

class InputQuestion extends Component {
  render() {
    const { handleSubmit } = this.props
    let type
    console.log('Inside InputQuestion ******')
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

        {/* <h3>what would you like to do today ?</h3>
        <input type="Text" placeholder="e.g. Hiking" />
        <button>Go</button>
        <span>
          <a href="">dont know? Get options...</a>
        </span> */}
      </div>
    )
  }
}

const mapState = state => ({
  error: state.currentUser.error,
  users: state.users
})

const mapDispatch = (dispatch, ownProps) => ({
  fetchUsers: () => {
    const thunk = fetchUsers()
    dispatch(thunk)
  },
  async handleSubmit(evt, type) {
    console.log('Inside mapdispatch auth form')
    evt.preventDefault()
    // const email = evt.target.email.value
    // const password = evt.target.password.value
    //const redirect = type === 'login' ? '/user' : '/createProfile'
    console.log('ownProps', ownProps)
    const thunk = await fetchUsers()
    console.log('after thunk call')
    await dispatch(thunk)
    ownProps.history.push('/allUsers')
    console.log('after ownProps', ownProps)
    // Promise.resolve(dispatch(auth(email, password, type))).then(res => {
    //   ownProps.history.push(redirect)
    //   //dispatch(fetchUsers(res))
    // })
  }
})

export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(InputQuestion)
)
