import React from 'react'
import Counter from './Counter'

class Counters extends React.Component {
  constructor(props) {
    super(props)

    this.state = { nextCounterId: 1, counterIds: [] }
  }

  addCounter = () => {
    const { nextCounterId, counterIds } = this.state

    this.setState({
      nextCounterId: nextCounterId + 1,
      counterIds: [ ...counterIds, nextCounterId ]
    })
  }

  removeCounter = counterId => {
    const { counterIds } = this.state

    this.setState({ counterIds: counterIds.filter(id => id !== counterId) })
  }

  render() {
    return (
      <div>
        <button onClick={this.addCounter}>add counter</button>

        <div>
          {this.state.counterIds.map(counterId => (
            <Counter
              key={counterId}
              id={counterId}
              onRemove={this.removeCounter}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Counters
