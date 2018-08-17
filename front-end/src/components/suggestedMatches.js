import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cards, { Card } from 'react-swipe-card'
import { fetchSuggestedMatches, matchWith } from '../store'
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

  filterSuggestedMatches = (matches, user) => {
    if (user.activityId) {
      const yourActivityTagIds = user.activity.tags.map(tag => tag.id)
      return matches.filter(
        match =>
          match.activityId &&
          (match.activityId === user.activityId ||
            match.activity.tags.some(tag =>
              yourActivityTagIds.includes(tag.id)
            ))
      )
    } else if (this.props.tags.some(tag => tag.selected)) {
      const selectedTagIds = this.props.tags
        .filter(tag => tag.selected)
        .map(tag => tag.id)
      return matches.filter(
        match =>
          match.activityId &&
          match.activity.tags.some(tag => selectedTagIds.includes(tag.id))
      )
    } else {
      return matches
    }
  }

  render() {
    const {
      suggestedMatches,
      currentUser,
      onReject,
      onLove,
      match,
      loadMatches,
      matchWithUser,
    } = this.props

    if (!Array.isArray(suggestedMatches) && !suggestedMatches) {
      return <div>You're not allowed to view this page.</div>
    } else if (
      Array.isArray(suggestedMatches) &&
      suggestedMatches.length === 0
    ) {
      return <div>No matches found.</div>
    } else {
      const filteredSuggestedMatches = this.filterSuggestedMatches(
        suggestedMatches,
        currentUser
      )
      return (
        <div className="container">
          <div />
          <Cards
            alertRight={<CustomAlertRight />}
            alertLeft={<CustomAlertLeft />}
            onEnd={() => loadMatches()}
            className="master-root"
          >
            {!filteredSuggestedMatches ? (
              <div>Nobody yet!</div>
            ) : (
              filteredSuggestedMatches.map(user => (
                <Card
                  key={user.id}
                  onSwipeLeft={() => {
                    onReject(user.id, currentUser.id, match.params.type)
                  }}
                  onSwipeRight={() => {
                    matchWithUser(user.id)
                  }}
                >
                  <UserCard key={user.id} user={user} />
                </Card>
              ))
            )}
          </Cards>
        </div>
      )
    }
  }
}

const mapState = state => {
  return {
    suggestedMatches: state.suggestedMatches,
    currentUser: state.user,
    tags: state.tags,
  }
}

const mapDispatch = (dispatch, ownProps) => ({
  loadMatches: async () => {
    const userId = +ownProps.match.params.id
    await dispatch(fetchSuggestedMatches(userId))
  },

  matchWithUser: id => dispatch(matchWith(id)),

  onReject(userId, currentUserId) {
    // dispatch(rejectUser(userId, currentUserId))
  },
  onLove(userId, currentUserId) {
    // dispatch(addMatches(userId, currentUserId))
  },
})

export default connect(
  mapState,
  mapDispatch
)(SuggestedMatches)
