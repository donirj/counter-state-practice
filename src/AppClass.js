import React, { Component } from 'react'

export default class AppClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment  = () => {
        this.setState((previousState) => ({
            count: previousState.count + 1
        }));
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

  render() {
    return (
    <div>
        <h1>welcome to counter app</h1>
        <p>the count is: {this.state.count}</p>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrecrement}>-</button>
    </div>
    )
  }
}
