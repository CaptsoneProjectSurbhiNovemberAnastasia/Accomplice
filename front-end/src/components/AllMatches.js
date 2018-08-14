import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMatches } from '../store'
import MatchedUser from './MatchedUser'
import { NavLink } from 'react-router-dom'

class AllMatches extends Component {
  componentDidMount() {
    this.props.loadMatches(this.props.user.id)
  }
  render() {
    const { matches } = this.props
    return (
      <ul>
        {matches && matches.length ? (
          matches.map(user => <MatchedUser user={user} key={user.id} />)
        ) : (
          <div>No matches yet!</div>
        )}
      </ul>
    )
  }
}

const mapDispatch = dispatch => ({
  loadMatches: id => dispatch(fetchMatches(id)),
})
const mapState = state => ({ matches: state.matches, user: state.user })
export default connect(
  mapState,
  mapDispatch
)(AllMatches)
