import React from 'react'

const RadioForm = props => {
  const { values, question, handleChange, handleClick, answer } = props

  return (
    <div>
      <div>{question.question}</div>
      <br />
      <form>
        {values.map(value => (
          <input
            type="radio"
            key={value}
            value={value}
            onChange={handleChange}
            checked={+answer === value}
          />
        ))}
        <div className="scale">Disagree Neutral Agree</div>
        <button
          type="button"
          onClick={function(evt) {
            handleClick(evt, question.id)
          }}
        >
          Next
        </button>
      </form>
    </div>
  )
}

export default RadioForm
