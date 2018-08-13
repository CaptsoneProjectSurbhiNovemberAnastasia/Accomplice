import React, { Component } from 'react'
import Cards, { Card } from 'react-swipe-card'
import { connect } from 'react-redux'
import {
  // fetchMatches,
  // addMatches,
  fetchUsers
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

class AllUsers extends Component {
  // componentDidMount() {
  //   this.props.onLoad(this.props.currentUser)
  // }

  // componentWillUnmount() {
  //   const species = this.props.match.params.type
  //   this.props.onDismount(species)
  // }

  render() {
    const { users, currentUser, onReject, onLove, onLoad, match } = this.props

    //const data = ['Alexandre', 'Thomas', 'Lucien']
    if (users[0]) {
      console.log('imageUrl', users[0].imageUrl)
    }
    return (
      <div className="container">
        <div id="card-stack" />
        <Cards
          alertRight={<CustomAlertRight />}
          alertLeft={<CustomAlertLeft />}
          onEnd={() => onLoad(currentUser)}
          className="master-root"
        >
          {users.map(user => (
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
              <img src={user.imageUrl} />
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
  users: state.users,
  currentUser: state.currentUser
})

const mapDispatch = (dispatch, ownProps) => ({
  async onLoad(user) {
    for (let i = 0; i < 25; i++) {
      await dispatch(fetchUsers(ownProps.match.params.type, user))
    }
  },
  loadMatches(id) {
    // dispatch(fetchMatches(id))
  },
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
)(AllUsers)
