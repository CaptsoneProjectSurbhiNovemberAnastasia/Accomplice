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
        <NavLink to="/suggestedmatches">Don't know? Get swiping!</NavLink>
      </div>
      <CurrentLocation />
    </div>
  )
}

export default withRouter(InputQuestion)
