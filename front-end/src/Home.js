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
    for (var i = 5; i >= 1; i--) {
      topFive.push(users[i])
    }
    return (
      <div>
      {
        !topFive ?
        console.log('loading') :
        topFive.forEach(element => console.log('TEST:', element))
        // topFive.map(user => <h1>{user}</h1>)
      }
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
