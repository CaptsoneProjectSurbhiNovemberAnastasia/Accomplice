import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, Switch } from 'react-router-dom'
import User from './components/user'
import MatchedUsers from './components/matchedUsers'
import AuthForm from './components/auth-form'
import SuggestedMatches from './components/suggestedMatches'
import InputQuestion from './components/inputQuestion'
import { me } from './store'

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }
  render() {
    const { isLoggedIn } = this.props
    console.log('am i logged in?', isLoggedIn)
    return (
      <div>
        <Switch>
          <Route exact path="/" component={AuthForm} />

          {isLoggedIn && (
            <Switch>
              <Route
                exact
                path="/user/:id/suggestedmatches"
                component={SuggestedMatches}
              />

              <Route exact path="/user" component={User} />
              <Route path="/matchedUsers" component={MatchedUsers} />
              <Route path="/question" component={InputQuestion} />
            </Switch>
          )}
          <Route exact path="/" component={AuthForm} />
        </Switch>
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    },
  }
}
const mapState = state => ({ isLoggedIn: !!state.user.id })
export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(Routes)
)
