import React from 'react'
import CounterValue from './CounterValue'
import './Counter.sass'

class Counter extends React.Component {
  constructor(props) {
    super(props)

    this.state = { name: '', value: 0, intervalId: null }
  }

  setName = event => {
    this.setState({ name: event.target.value })
  }

  startCounter = () => {
    const intervalId = setInterval(() => {
      this.setState({ value: this.state.value + 1 })
    }, 1000)

    this.setState({ intervalId })
  }

  stopCounter = () => {
    clearInterval(this.state.intervalId)

    this.setState({ intervalId: null })
  }

  resetCounter = () => {
    this.stopCounter()

    this.setState({ value: 0 })
  }

  removeCounter = () => {
    this.props.onRemove(this.props.id)
  }

  componentWillUnmount() {
    this.stopCounter()
  }

  render() {
    return (
      <div className="counter">
        <input
          className="counter__input"
          type="text"
          onChange={this.setName}
          value={this.state.name}
        />
        <CounterValue value={this.state.value} />
        <button className="counter__start-button" onClick={this.startCounter}>
          start
        </button>
        <button className="counter__stop-button" onClick={this.stopCounter}>
          stop
        </button>
        <button className="counter__reset-button" onClick={this.resetCounter}>
          reset
        </button>
        <button className="counter__remove-button" onClick={this.removeCounter}>
          remove
        </button>
      </div>
    )
  }
}

export default Counter
