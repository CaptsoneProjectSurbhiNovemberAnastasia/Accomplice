import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeCurrentLocation, updateUser } from '../store'

class CurrentLocation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      latLng: [],
      geolocationOn: false
    }
    // Bindings
    this.getLocation = this.getLocation.bind(this)
    this.showPosition = this.showPosition.bind(this)
    this.errorHandler = this.errorHandler.bind(this)
    this.onLocation = this.onLocation.bind(this)
  }

  getLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        this.showPosition,
        this.errorHandler
      )
      this.setState({ geolocationOn: true })
    } else {
      console.log('geolocation IS NOT available')
    }
  }
  onLocation(lat, lng) {
    this.props.updateLocation(lat, lng, this.props.user.id)
  }
  showPosition(position) {
    var latitude = position.coords.latitude
    var longitude = position.coords.longitude
    this.setState({
      latLng: [latitude, longitude]
    })
    this.onLocation(this.state.latLng[0], this.state.latLng[1])
  }

  errorHandler(err) {
    console.log('getCurrentPosition Error:', err)
  }

  render() {
    console.log(this.state)

    return (
      <div>
        {this.state.geolocationOn ? (
          <button
            className="geoLoc"
            onClick={e => {
              e.preventDefault()
              this.setState({ geolocationOn: false })
              this.props.onTurnOff()
            }}
          >
            Turn Off Current Location
          </button>
        ) : (
          <button
            className="geoLoc"
            onClick={e => {
              e.preventDefault()
              this.getLocation()
            }}
          >
            Get Current Location
          </button>
        )}
      </div>
    )
  }
}

const mapState = state => ({
  currentLocation: state.currentLocation,
  user: state.user
})

const mapDispatch = dispatch => ({
  onTurnOff() {
    dispatch(removeCurrentLocation())
  },
  updateLocation(latitude, longitude, id) {
    dispatch(updateUser({ latitude, longitude, id }))
  }
})

export default connect(
  mapState,
  mapDispatch
)(CurrentLocation)
