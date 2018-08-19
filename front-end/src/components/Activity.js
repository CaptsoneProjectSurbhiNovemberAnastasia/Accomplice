import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import { setActivity, setActivityTags } from '../store'
import TagSelect from './TagSelect'

class Activity extends Component {
  state = { activity: '' }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    })
  }

  handleSubmit = evt => {
    evt.preventDefault()
    this.props.chooseActivity(this.state.activity)
  }

  render() {
    const { tags } = this.props

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="activity col-6">
            <div>What would you like to do today?</div>
          </label>
          <input
            name="activity"
            type="text"
            placeholder="e.g. Go on a hike"
            onChange={this.handleChange}
          />

          <button type="submit" className="goBtn">
            GO
          </button>
        </form>
        <TagSelect
          text="Describe your activity:"
          tagMethod={this.props.chooseActivityTags}
          activity={true}
        />
      </div>
    )
  }
}

const mapState = state => ({
  tags: state.tags,
  activity: state.activity,
})
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
