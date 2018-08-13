import React, { Component } from 'react'
import Navbar from './components/navbar'
import Routes from './Routes'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes />
      </div>
    )
  }
}

export default App
