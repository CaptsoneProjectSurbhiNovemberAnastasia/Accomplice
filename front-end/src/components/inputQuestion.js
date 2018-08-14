import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

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

export default withRouter(
  connect(
    mapState,
    null
  )(InputQuestion)
)
