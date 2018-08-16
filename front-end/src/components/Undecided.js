import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTags } from '../store'
import Select from 'react-select'

class Undecided extends Component {
  state = {
    selectedOptions: [],
  }

  handleChange = selectedOptions => {
    this.setState({ selectedOptions })
  }
  handleSubmit = evt => {
    evt.preventDefault()
    this.props.chooseTags(this.state.selectedOptions)
  }
  componentDidMount() {
    // i can't get the form to populate with previously selected tags, but they stay in the store and db
    console.log(this.props.tags)
    this.setState({
      selectedOptions: this.props.tags.filter(tag => tag.selected),
    })
  }
  render() {
    const { tags } = this.props
    const { selectedOptions } = this.state
    let options

    if (tags) {
      options = tags.map(tag => ({
        value: tag.name.toLowerCase(),
        label: tag.name,
        id: tag.id,
        key: tag.id,
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
  chooseTags: tags => dispatch(setTags(tags)),
})
const mapState = state => ({
  tags: state.tags
})
export default connect(
  mapState,
  mapDispatch
)(Undecided)
