import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cards, { Card } from 'react-swipe-card'
import { fetchSuggestedMatches } from '../store'
import UserCard from './UserCard'

const CustomAlertLeft = () => (
  <span>
    <img alt="reject user icon" src="../reject-icon.png" className="icon" />
  </span>
)
const CustomAlertRight = () => (
  <span>
    <img alt="accept user icon" src="../favorite-icon.png" className="icon" />
  </span>
)
class SuggestedMatches extends Component {
  componentDidMount() {
    this.props.loadMatches()
  }

  render() {
    const {
      suggestedMatches,
      currentUser,
      onReject,
      onLove,
      loadMatches,
      match
    } = this.props
    // const { suggestedMatches } = this.props
    if (!Array.isArray(suggestedMatches) && !suggestedMatches) {
      return <div>You're not allowed to view this page.</div>
    } else if (
      Array.isArray(suggestedMatches) &&
      suggestedMatches.length === 0
    ) {
      return <div>No matches found.</div>
    } else {
      return (
        <div className="container">
          <div id="card-stack" />
          <Cards
            alertRight={<CustomAlertRight />}
            alertLeft={<CustomAlertLeft />}
            onEnd={() => loadMatches(currentUser)}
            className="master-root"
          >
            {!suggestedMatches
              ? null
              : suggestedMatches.map(user => (
                  <Card
                    key="{user.id}"
                    onSwipeLeft={() => {
                      onReject(user.id, currentUser.id, match.params.type)
                    }}
                    onSwipeRight={() => {
                      onLove(user.id, currentUser.id, match.params.type)
                    }}
                  >
                    <UserCard key={user.id} user={user} />
                  </Card>
                ))}
          </Cards>
        </div>
      )
    }
  }
}

const mapState = state => {
  return {
    suggestedMatches: state.suggestedMatches,
    currentUser: state.user
  }
}

const mapDispatch = (dispatch, ownProps) => ({
  loadMatches: async () => {
    const userId = +ownProps.match.params.id
    await dispatch(fetchSuggestedMatches(userId))
  },
  // async onLoad(user) {
  //   for (let i = 0; i < 25; i++) {
  //     await dispatch(fetchUsers(ownProps.match.params.type, user))
  //   }
  // },
  // loadMatches(id) {
  //   // dispatch(fetchMatches(id))
  // },
  onReject(userId, currentUserId) {
    // dispatch(rejectUser(userId, currentUserId))
  },
  onLove(userId, currentUserId) {
    // dispatch(addMatches(userId, currentUserId))
  }
})

export default connect(
  mapState,
  mapDispatch
)(SuggestedMatches)
