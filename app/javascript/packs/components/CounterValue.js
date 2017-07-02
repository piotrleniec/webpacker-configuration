import React from 'react'

const CounterValue = props => {
  const seconds = props.value % 60
  const minutes = (props.value - seconds) / 60

  return (
    <div className="counter__value">
      {`${minutes}:${seconds}`}
    </div>
  )
}

export default CounterValue
