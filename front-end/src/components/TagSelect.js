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
    this.props.chooseTags(selectedOptions)
  }

  componentDidMount() {
    this.setState({
      selectedOptions: this.props.tags
        .filter(tag => tag.selected)
        .map(tag => this.mapTagToSelectElement(tag)),
    })
  }

  mapTagToSelectElement = tag => ({
    value: tag.name.toLowerCase(),
    label: tag.name,
    id: tag.id,
    key: tag.id,
  })

  render() {
    const { tags, text } = this.props
    let { selectedOptions } = this.state
    let options

    if (tags) {
      options = tags.map(tag => this.mapTagToSelectElement(tag))
    }
    return (
      <div>
        <div>{text}</div>
        <form>
          <Select
            value={selectedOptions}
            onChange={this.handleChange}
            options={options}
            isMulti
          />
        </form>
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  chooseTags: tags => dispatch(setTags(tags)),
})
const mapState = state => ({
  tags: state.tags,
})
export default connect(
  mapState,
  mapDispatch
)(Undecided)
