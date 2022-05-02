import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  onIncrement = () => {
    const {number} = this.state
    this.setState(prevState => ({
      number: prevState.number + Math.ceil(Math.random() * 100),
    }))
    console.log(number)
  }

  EvenOdd = () => {
    const {number} = this.state
    return number % 2 === 0 ? 'Even' : 'Odd'
  }

  render() {
    const text = this.EvenOdd()
    const {number} = this.state
    return (
      <div className="bgcontainer">
        <h1>Count {number}</h1>
        <div className="innercontainer">
          <p>Count is {text}</p>
          <button type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
