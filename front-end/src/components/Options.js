import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import TagSelect from './TagSelect'
import { connect } from 'react-redux'
import { setTags } from '../store'

class Options extends Component {
  render() {
    return (
      <div>
        <TagSelect
          text="You are seeing users doing things tagged with:"
          tagMethod={this.props.chooseTags}
          activity={false}
        />
        <NavLink to="/quiz">Retake Personality Quiz</NavLink>
        <NavLink to="/question">Edit your Activity</NavLink>
      </div>
    )
  }
}
const mapDispatch = dispatch => ({
  chooseTags: tags => dispatch(setTags(tags)),
})
export default connect(
  null,
  mapDispatch
)(Options)
