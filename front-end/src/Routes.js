import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, Switch } from 'react-router-dom'
import User from './components/user'
import MatchedUsers from './components/matchedUsers'
import AuthForm from './components/auth-form'
import SuggestedMatches from './components/suggestedMatches'
import InputQuestion from './components/inputQuestion'

class Routes extends Component {
  render() {
    const { isLoggedIn } = this.props
    console.log('am i logged in?', isLoggedIn)
    return (
      <div>
        <Switch>
          <Route exact path="/" component={AuthForm} />

          {true && (
            <Switch>
              <Route
                exact
                path="/user/:id/suggestedMatches"
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

const mapState = state => ({ isLoggedIn: !!state.user.id })
export default withRouter(
  connect(
    mapState,
    null
  )(Routes)
)
