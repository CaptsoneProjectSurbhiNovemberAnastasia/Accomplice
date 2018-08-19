import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import TagSelect from './TagSelect'
import { connect } from 'react-redux'
import { setTags } from '../store'
import Activity from './Activity'

class Options extends Component {
  state = { editingActivity: false }
  render() {
    const { editingActivity } = this.state
    const { activity } = this.props
    return (
      <div>
        <NavLink to="/profile">Back</NavLink>
        <TagSelect
          text="You are seeing users doing things tagged with:"
          tagMethod={this.props.chooseTags}
          activity={false}
        />

        {editingActivity ? (
          <Activity
            onClick={() => this.setState({ editingActivity: false })}
            editing={true}
          />
        ) : (
          <div>
            <div>
              Your Activity is: {activity ? activity.name : 'Loading...'}
            </div>
            <button onClick={() => this.setState({ editingActivity: true })}>
              Edit Your Activity
            </button>
          </div>
        )}
        <NavLink to="/quiz">Retake Personality Quiz</NavLink>
      </div>
    )
  }
}

const mapState = state => ({ activity: state.activity })
const mapDispatch = dispatch => ({
  chooseTags: tags => dispatch(setTags(tags)),
})
export default connect(
  mapState,
  mapDispatch
)(Options)
