import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import { setActivity } from '../store'
import Select from 'react-select'
import { Input } from 'react-input-component'
import CurrentLocation from './currentLocation'

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
        <form onSubmit={this.handleSubmit}>
          <div className="group row ">
            <label htmlFor="activity col-6">
              <div>What would you like to do today?</div>
            </label>
            <input
              name="activity"
              type="text"
              placeholder="e.g. Go on a hike"
              onChange={this.handleChange}
            />
          </div>
          <div className="group row">
            <label htmlFor="question col-6">
              <div> Tag your activity so others can find you!</div>
            </label>
          </div>
          <div className=" group row">
            <Select
              className="col-4"
              value={this.selectedOptions}
              onChange={this.handleChange}
              options={options}
              isMulti
            />
            <button type="submit" className="goBtn">
              GO
            </button>
          </div>
        </form>
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
