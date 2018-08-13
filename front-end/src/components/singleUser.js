import React, { Component } from 'react'

class SingleUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expand: props.expand
    }
  }

  onClick(e) {
    e.preventDefault()
    this.setState({ expand: !this.state.expand })
  }

  render() {
    const { user } = this.props
    return (
      <div
        id="userCard"
        className={this.state.expand ? 'expanded' : 'collapsed'}
        onClick={this.onClick.bind(this)}
      >
        <div>
          <div id="picContainer">
            <img
              src={
                user.media.photos
                  ? user.media.photos.photo[3].$t
                  : 'http://biorem.org/wp-content/uploads/2016/07/not-available.png'
              }
              className="userPic rounded"
              alt="user profile pic"
            />
          </div>
        </div>
        <div>
          <h1>{user.name.$t}</h1>
          <h2>{`${user.age.$t}, ${
            user.size.$t === 'L'
              ? 'Large'
              : user.size.$t === 'M'
                ? 'Medium'
                : 'Small'
          }-sized ${user.sex.$t === 'M' ? ' Male' : ' Female'}`}</h2>
          <h3>
            {Array.isArray(user.breeds.breed)
              ? user.breeds.breed.map(el => el.$t).join(', ')
              : user.breeds.breed.$t}
          </h3>
        </div>
        <div>
          <p>
            {user.description.$t && user.description.$t.length > 500
              ? `${user.description.$t.slice(0, 500)}...`
              : user.description.$t}
          </p>
        </div>
      </div>
    )
  }
}

export default SingleUser
