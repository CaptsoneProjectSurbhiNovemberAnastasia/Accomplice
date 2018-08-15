import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTags } from '../store'

class Undecided extends Component {
  componentDidMount() {
    this.props.loadTags()
  }
  render() {
    const { tags } = this.props
    return (
      <div>
        {tags && tags.length ? (
          tags.map(tag => <div key={tag.id}>{tag.name}</div>)
        ) : (
          <div>Loading tags...</div>
        )}
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  loadTags: () => dispatch(fetchTags()),
})
const mapState = state => ({
  tags: state.tags,
})
export default connect(
  mapState,
  mapDispatch
)(Undecided)
