import React, { Component } from 'react'
import './App.css'
import AppHeader from './AppHeader'

const obj = { a: 1, b: 2, c: 3 }
const foo = ({ a, ...other_stuff }) => {
  console.log(a)
  console.log(other_stuff)
}
foo(obj)

class App extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    const greeting = this.state.clicked
      ? 'WELCOME TO REACT'
      : 'Welcome to React'

    return (
      <div className="App">
        <AppHeader greeting={greeting}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">
          <button type="button" onClick={this.handleClick}>Click me!</button>
        </p>
      </div>
    )
  }
}

export default App
