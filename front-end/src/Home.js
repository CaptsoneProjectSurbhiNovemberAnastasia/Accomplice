import React, { Component } from 'react'
import { fetchUsers } from './store/action-creators.js'
import { connect } from 'react-redux'
import ProfileCard from './ProfileCard'
import Cards, { Card } from 'react-swipe-card'

class Home extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    const { users } = this.props
    let topFive = []

    if (users.length) {
      for (var i = 5; i >= 1; i--) {
        topFive.push(users[i])
      }
    }
    console.log(topFive)
    const data = ['Alexandre', 'Thomas', 'Lucien']

    return (
      <div>
        <h2>Top Matches:</h2>
        <Cards onEnd={action('end')} className="master-root">
          {data.map(item => (
            <Card
              onSwipeLeft={action('swipe left')}
              onSwipeRight={action('swipe right')}
            >
              <h2>{item}</h2>
            </Card>
          ))}
        </Cards>
        {/* className="profiles-box"
        <div>
          {!topFive
              ? console.log('loading')
              : topFive.map(user => {
                  return <ProfileCard user={user} key={user.id} />
                })}
          <h1>November</h1>
        </div> */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => {
      const thunk = fetchUsers()
      dispatch(thunk)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
