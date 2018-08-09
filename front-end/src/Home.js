import React, { Component } from 'react'
import { fetchUsers } from './store/action-creators.js'
import { connect } from 'react-redux';
// import ProfileCard from './ProfileCard'
class Home extends Component {

  componentDidMount () {
    this.props.fetchUsers()
  }

  render () {
    const { users } = this.props
    console.log('USERS', users)
    if (users) {
      console.log('HERE')
      for (var i = 5; i >= 0; i++) {

      }
    }

    return (
      <div>
        {/* {
          topFive.map(user => {
          <ProfileCard user={user} key={user.id} />
        })
        } */}
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
