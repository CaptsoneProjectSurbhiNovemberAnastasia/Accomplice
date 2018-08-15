import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTags, setTags } from '../store'
import Select from 'react-select'

class Undecided extends Component {
  state = {
    selectedOptions: null,
  }

  handleChange = selectedOptions => {
    this.setState({ selectedOptions })
  }
  handleSubmit = evt => {
    evt.preventDefault()
    this.props.chooseTags(this.state.selectedOptions)
  }
  componentDidMount() {
    this.props.loadTags()
  }
  render() {
    const { tags } = this.props
    const { selectedOptions } = this.state
    let options
    if (tags) {
      console.log(tags)
      options = tags.map(tag => ({
        value: tag.name.toLowerCase(),
        label: tag.name,
        id: tag.id,
      }))
    }
    return (
      <div>
        <div>What kind of things are you interested in?</div>
        <form onSubmit={this.handleSubmit}>
          <Select
            value={selectedOptions}
            onChange={this.handleChange}
            options={options}
            isMulti
          />
          <button type="submit">Go</button>
        </form>
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  loadTags: () => dispatch(fetchTags()),
  chooseTags: tags => dispatch(setTags(tags)),
})
const mapState = state => ({
  tags: state.tags,
})
export default connect(
  mapState,
  mapDispatch
)(Undecided)
