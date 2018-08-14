import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import { connect } from 'react-redux'

class MatchedUsers extends Component {
  render() {
    return (
      <div>
        <h1>Matches</h1>
        <div className="matchesList">
          {this.props.matches.length ? (
            this.props.matches.map(user => {
              return (
                user.id && (
                  <div key={user.id} className="matches userCard">
                    <button
                      className="unmatch smallIcon"
                      onClick={event => {
                        event.preventDefault()
                        this.props.onUnmatch(user, this.props.user.id)
                      }}
                    >
                      <FontAwesome name="heart" />
                      <FontAwesome name="remove" />
                    </button>
                    <button
                      className="emailEnvelope smallIcon"
                      onClick={event => {
                        event.preventDefault()
                        this.props.onClick(this.props.user, user)
                      }}
                    >
                      <FontAwesome name="envelope-o" />
                    </button>
                    <div id="userInfo">
                      <a>
                        {user.firstName} {user.lastName}
                      </a>
                    </div>
                  </div>
                )
              )
            })
          ) : (
            <p>NO MATCHES!</p>
          )}
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  user: state.user,
  matches: state.users,
  matchedUsers: state.matchedUsers,
})

export default connect(
  mapState,
  null
)(MatchedUsers)
