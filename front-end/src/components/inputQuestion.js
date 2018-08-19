import React from 'react'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import CurrentLocation from './currentLocation'
import Activity from './Activity'

const InputQuestion = props => {
  return (
    <div id="questionForm">
      <Activity />
      <div className="group row">
        <NavLink to="/suggestedmatches">See people to match with!</NavLink>
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

export default withRouter(InputQuestion)
