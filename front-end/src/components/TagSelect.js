import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTags } from '../store'
import Select from 'react-select'

class TagSelect extends Component {
  state = {
    selectedOptions: [],
  }

  componentDidMount() {
    this.setState({
      selectedOptions: this.props.tags
        .filter(tag => (this.props.activity ? tag.activity : tag.selected))
        .map(tag => this.mapTagToSelectElement(tag)),
    })
  }

  handleChange = selectedOptions => {
    this.setState({ selectedOptions })
    this.props.tagMethod(selectedOptions)
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
        <Select
          value={selectedOptions}
          onChange={this.handleChange}
          options={options}
          isMulti
        />
      </div>
    )
  }
}

const mapState = state => ({
  tags: state.tags,
})
export default connect(mapState)(TagSelect)
