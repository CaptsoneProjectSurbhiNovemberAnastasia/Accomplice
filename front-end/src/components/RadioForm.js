import React from 'react'

const RadioForm = (props) => {
  const { question, handleSubmit, handleChange, handleClick, answer} = props

  return (
    <form onChange={handleChange}>
      <div>{question.question}</div><br/>
      <input type='radio' value={-33} checked={answer === this.value}/><label>Disagree</label><br/>
      <input type='radio' value={-15} checked={answer === this.value}/><br/>
      <input type='radio' value={0} checked={answer === this.value}/><label>Neutral</label><br/>
      <input type='radio' value={15} checked={answer === this.value}/><br/>
      <input type='radio' value={33} checked={answer === this.value}/><label>Agree</label><br/>
      {
        (question.id === 15) ?
        <button type='submit' onClick={handleClick} onSubmit={handleSubmit}>Submit</button> :
        <button type='submit' onClick={handleClick}>Next</button>
      }
    </form>
  )
}

export default RadioForm
