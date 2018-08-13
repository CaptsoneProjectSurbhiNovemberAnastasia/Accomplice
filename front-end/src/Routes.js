import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  // Redirect,
  withRouter,
  Route,
  Switch,
  // Switch,
  // BrowserRouter as Router
} from 'react-router-dom'
import Navbar from './components/navbar'
import User from './components/user'
import MatchedUsers from './components/matchedUsers'
import AuthForm from './components/auth-form'
import SuggestedMatches from './components/suggestedMatches'
import InputQuestion from './components/inputQuestion'
//import Home from './Home'
// import {
//   Login,
//   Navbar
//   // Login,
//   // UserHome,
//   // CreateProfile,
//   // UpdateProfile,
//   // userTypes,
//   // Matches,
//   // MatchSingle,
//   // EmailPreview
// } from './components'
// import App from './App'
// import { me } from './store'

class Routes extends Component {
  render() {
    const { isLoggedIn } = this.props
    console.log(isLoggedIn)
    return (
      <div>
        <Switch>
          {/* <Route path="/createProfile" component={CreateProfile} /> */}
          <Route exact path="/" component={AuthForm} />
          {isLoggedIn && (
            <Switch>
              <Route
                path="/user/:id/suggestedMatches"
                component={SuggestedMatches}
              />
              <Route path="/navbar" component={Navbar} />

              <Route exact path="/user" component={User} />
              <Route path="/matchedUsers" component={MatchedUsers} />
              <Route path="/question" component={InputQuestion} />
            </Switch>
          )}
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
// export default Routes
