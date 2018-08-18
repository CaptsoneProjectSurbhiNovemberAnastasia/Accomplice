import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import TagSelect from './TagSelect'

class Options extends Component {
  render() {
    return (
      <div>
        <TagSelect text="You are seeing users doing things tagged with:" />
        <NavLink to="/quiz">Retake Personality Quiz</NavLink>
      </div>
    )
  }
}

export default Options
