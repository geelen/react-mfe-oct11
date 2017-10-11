import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

const obj = {
  a() {
    return this
  },
  b: function () {
    return this
  },
  c: () => {
    return this
  },
  d: () => this
}

console.log(obj.a())
console.log(obj.b())
console.log(obj.c())
console.log(obj.d())

const e = obj.a
console.log(e())

const AppHeader = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo"/>
    <h1 className="App-title">Welcome to React</h1>
  </header>
)

class App extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: true })
  }

  render() {
    return (
      <div className="App">
        <AppHeader/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {
          !this.state.clicked
            ? <p onClick={this.handleClick}>Click me!</p>
            : <p>I've been clicked!</p>
        }
      </div>
    )
  }
}

export default App
