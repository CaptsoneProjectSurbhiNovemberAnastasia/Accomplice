import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
// import { sendEmail, unMatch } from '../store'
import { connect } from 'react-redux'
// import { EmailPreview } from './'

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
                    {/* <Link to={`matches/${user.id}`}>
                      <img
                        src={
                          user.media.photos
                            ? user.media.photos.photo[3]
                            : 'http://biorem.org/wp-content/uploads/2016/07/not-available.png'
                        }
                        className="userPic rounded"
                        alt="user profile pic"
                      /> */}
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
                    {/* </Link> */}
                    {/* <EmailPreview
                      user={this.props.currentUser}
                      user={user}
                      name="matches"
                      contacted={contacted}
                    /> */}
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

const mapDispatch = dispatch => ({
  // onUnmatch(user, userId) {
  //   if (
  //     window.confirm(
  //       `Are you sure you want to delete your match with ${user.name}?`
  //     )
  //   )
  //     dispatch(unMatch(user.id, userId))
  // },
  // onClick(user, user) {
  //   sendEmail(user, user)
  // }
})

export default connect(
  mapState,
  mapDispatch
)(MatchedUsers)
