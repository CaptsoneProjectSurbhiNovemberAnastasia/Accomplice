import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSuggestedMatches } from '../store'

class SuggestedMatches extends Component {
  componentDidMount() {
    this.props.loadMatches()
  }

  render() {
    const { suggestedMatches } = this.props
    console.log('PROPS:', this.props)
    return (
      <ul>
        {!suggestedMatches
          ? null
          : suggestedMatches.map(user => (
              <li key={user.id}>{user.firstName}</li>
            ))}
      </ul>
    )
  }
}

const mapState = state => {
  console.log(state)
  return {
    suggestedMatches: state.suggestedMatches,
    currentUser: state.currentUser,
  }
}

const mapDispatch = (dispatch, ownProps) => ({
  loadMatches: async () => {
    const userId = +ownProps.match.params.id
    await dispatch(fetchSuggestedMatches(userId))
  },
})

export default connect(
  mapState,
  mapDispatch
)(SuggestedMatches)
