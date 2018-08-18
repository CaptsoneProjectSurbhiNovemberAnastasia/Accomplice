import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, Switch } from 'react-router-dom'
import User from './components/user'
import MatchedUsers from './components/matchedUsers'
import AuthForm from './components/auth-form'
import SuggestedMatches from './components/suggestedMatches'
import InputQuestion from './components/inputQuestion'
import AllMatches from './components/AllMatches'
import Chat from './components/Chat'
import { me, fetchMatches, fetchTags } from './store'
import UserProfile from './components/UserProfile'
import Quiz from './components/Quiz'
import TagSelect from './components/TagSelect'

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData(this.props.user.id)
  }

  render() {
    const { isLoggedIn } = this.props
    return (
      <div>
        <Switch>
          <Route exact path="/" component={AuthForm} />
          {isLoggedIn && (
            <Switch>
              {/* Routes placed here are only available after logging in */}
              <Route
                exact
                path="/suggestedmatches"
                component={SuggestedMatches}
              />
              <Route exact path="/user" component={User} />
              <Route path="/matchedUsers" component={MatchedUsers} />
              <Route exact path="/question" component={InputQuestion} />
              <Route exact path="/matches" component={AllMatches} />
              <Route path="/chat/:id" component={Chat} />
              <Route exact path="/quiz" component={Quiz} />
              <Route exact path="/profile" component={UserProfile} />
              <Route path="/tagselect" component={TagSelect} />
            </Switch>
          )}
          <Route component={AuthForm} />
        </Switch>
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData(id) {
      dispatch(me())
      dispatch(fetchMatches(id))
      dispatch(fetchTags())
    },
  }
}

const mapState = state => ({ isLoggedIn: !!state.user.id, user: state.user })
export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(Routes)
)
