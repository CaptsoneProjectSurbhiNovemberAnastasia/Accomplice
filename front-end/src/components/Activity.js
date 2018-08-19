import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setActivity, setActivityTags } from '../store'
import TagSelect from './TagSelect'

class Activity extends Component {
  state = { activity: '' }

  componentDidMount() {
    if (this.props.activity)
      this.setState({ activity: this.props.activity.name })
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    })
  }

  handleSubmit = evt => {
    evt.preventDefault()
    this.props.chooseActivity(this.state.activity)
    this.props.onClick()
  }

  render() {
    const { editing } = this.props

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="activity col-6">
            <div>
              {editing ? 'Your Activity: ' : 'What are you going to do today?'}
            </div>
          </label>
          <input
            name="activity"
            type="text"
            placeholder="e.g. Go on a hike"
            value={this.state.activity}
            onChange={this.handleChange}
          />

          <button type="submit" className="goBtn">
            {editing ? 'Set' : 'Go!'}
          </button>
        </form>
        <TagSelect
          text="Tag your activity:"
          tagMethod={this.props.chooseActivityTags}
          activity={true}
        />
      </div>
    )
  }
}
const mapState = state => ({ activity: state.activity })
const mapDispatch = dispatch => ({
  chooseActivity: activity => {
    dispatch(setActivity(activity))
  },
  chooseActivityTags: tags => {
    dispatch(setActivityTags(tags))
  },
})

export default connect(
  mapState,
  mapDispatch
)(Activity)
