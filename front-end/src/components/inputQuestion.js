import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import { setActivity } from '../store'
import { Input } from 'react-input-component'
import CurrentLocation from './currentLocation'
import Activity from './Activity'

class InputQuestion extends Component {
  state = {
    selectedOptions: [],
    activity: ''
  }

  handleSubmit = evt => {
    evt.preventDefault()
    this.props.chooseActivity(this.state.activity, this.state.selectedOptions)
  }

  handleChange = selectedOptions => {
    if (selectedOptions.target) {
      // it is an event
      this.setState({
        [selectedOptions.target.name]: selectedOptions.target.value
      })
    } else {
      // it is the options array from react-select
      this.setState({ selectedOptions })
    }
  }

  render() {
    const { user, tags } = this.props

    let options
    if (tags) {
      options = tags.map(tag => ({
        value: tag.name.toLowerCase(),
        label: tag.name,
        id: tag.id,
        key: tag.id
      }))
    }
    return (
      <div id="questionForm">
        <Activity
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          options={options}
          selectedOptions={this.state.selectedOptions}
        />
        <div className="group row">
          <NavLink to={`/user/${user.id}/suggestedmatches`}>
            See people to match with!
          </NavLink>
        </div>

        <div className="group row">
          <label htmlFor="question">
            <NavLink to="/undecided">Don't know... get a clue!</NavLink>
          </label>
        </div>
        <CurrentLocation />
      </div>
    )
  }
}

const mapState = state => ({
  user: state.user,
  tags: state.tags
})
const mapDispatch = dispatch => ({
  chooseActivity: (activity, tags) => {
    dispatch(setActivity(activity, tags))
  }
})

export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(InputQuestion)
)
