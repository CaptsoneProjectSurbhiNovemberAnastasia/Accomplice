import React, { Component } from 'react'
import Cards, { Card } from 'react-swipe-card'
import { connect } from 'react-redux'
import {
  fetchSuggestedMatches,
  fetchUser
  // addMatches,
  // rejectUser
} from '../store'
// import SingleUser from './singleUser'

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
    this.props.fetchUser()
  }

  // componentWillUnmount() {
  //   const species = this.props.match.params.type
  //   this.props.onDismount(species)
  // }

  render() {
    const { suggestedMatches, currentUser, onReject, onLove, onLoad, match } = this.props
    console.log('PROPS:', this.props)
    return (
      <div className="container">
        <div id="card-stack" />
        <Cards
          alertRight={<CustomAlertRight />}
          alertLeft={<CustomAlertLeft />}
          onEnd={() => onLoad(currentUser)}
          className="master-root"
        >
          { !suggestedMatches ? null :
            suggestedMatches.map(user => (
            <Card
              key="{user.id}"
              onSwipeLeft={() => {
                onReject(user.id, currentUser.id, match.params.type)
              }}
              onSwipeRight={() => {
                onLove(user.id, currentUser.id, match.params.type)
              }}
            >
              <h2>
                {user.firstName} {user.lastName}
              </h2>
            </Card>
          ))}
        </Cards>
        {/* {
            users.map(user => {
              return (
                <div>
                  <h1>Insie</h1>
                </div> */}
      </div>
    )
  }
}

const mapState = state => ({
  suggestedMatches: state.suggestedMatches,
  currentUser: state.currentUser
})

const mapDispatch = (dispatch, ownProps) => ({
  async fetchUser() {
    await dispatch(fetchUser(ownProps.match.params.id))
  },
  loadMatches: async () => {
    const userId = ownProps.match.params.id
    console.log('OWN PROPS:', ownProps.match.params.id)
    await dispatch(fetchSuggestedMatches(userId))
  },
  onReject: (userId, currentUserId) => {
    // dispatch(rejectUser(userId, currentUserId))
  },
  onLove: (userId, currentUserId) => {
    // dispatch(addMatches(userId, currentUserId))
  }
})

export default connect(
  mapState,
  mapDispatch
)(SuggestedMatches)
