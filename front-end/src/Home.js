import React, { Component } from 'react'
import { fetchUsers } from './store/action-creators.js'
import { connect } from 'react-redux';
import ProfileCard from './ProfileCard'
class Home extends Component {

  componentDidMount () {
    this.props.fetchUsers()
  }

  render () {
    const { users } = this.props
    let topFive = [];

    if (users.length) {
      for (var i = 5; i >= 1; i--) {
        topFive.push(users[i])
      }
    }
    console.log(topFive)

    return (
      <div>
        <h2>Top Matches:</h2>
        <div className="profiles-box">
      {
        !topFive ?
        console.log('loading') :
        topFive.map(user => {
          return <ProfileCard user={user} key={user.id}/>
        })
      }
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
