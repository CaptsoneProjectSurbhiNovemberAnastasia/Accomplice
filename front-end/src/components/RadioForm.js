import React from 'react'

const RadioForm = (props) => {
  const { values, question, handleSubmit, handleChange, handleClick, answer} = props

  return (
    <form >
      <div>{question.question}</div><br/>
      {
        values.map(value =>
          <input type='radio' key={value} value={value}  onChange={handleChange} checked={+answer === value}/>
        )
      }
      <div>Disagree Neutral Agree</div>
      {
        (question.id === 15) ?
        <button type='submit' onClick={handleClick} onSubmit={handleSubmit}>Submit</button> :
        <button type='submit' onClick={handleClick}>Next</button>
      }
    </form>
  )
}

export default RadioForm
