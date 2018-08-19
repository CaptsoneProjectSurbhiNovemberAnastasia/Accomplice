import React, { Component } from 'react'
import Select from 'react-select'

class Activity extends Component {
  render() {
    const { handleSubmit, handleChange, options, selectedOptions } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <div className="group row ">
          <label htmlFor="activity col-6">
            <div>What would you like to do today?</div>
          </label>
          <input
            name="activity"
            type="text"
            placeholder="  e.g. Go on a hike"
            onChange={handleChange}
          />
        </div>
        <div className="group row">
          <label htmlFor="question col-6">
            <div> Tag your activity so others can find you!</div>
          </label>
        </div>
        <div className="inlineBtn">
          <Select
            className="selectActivity"
            value={selectedOptions}
            onChange={handleChange}
            options={options}
            isMulti
          />
          <button type="submit" className="goBtn">
            GO
          </button>
        </div>
      </form>
    )
  }
}

export default Activity
