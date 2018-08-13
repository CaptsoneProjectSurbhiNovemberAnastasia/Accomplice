import React, { Component } from 'react'
// import Navbar from './components/Navbar'
import Routes from './Routes'
import './App.css'

class App extends Component {
  // componentDidMount() {
  //   fetch('http://localhost:8080/')
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // }

  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    )
  }
}

export default App
