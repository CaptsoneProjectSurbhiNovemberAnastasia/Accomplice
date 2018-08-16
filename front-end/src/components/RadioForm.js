import React from 'react'

const RadioForm = (props) => {
  const { checked, question, handleSubmit, handleChange, handleClick, answer} = props

  return (
    <form >
      <div>{question.question}</div><br/>
      <input type='radio' value={-33} checked={checked} onChange={handleChange}/><label>Disagree</label><br/>
      <input type='radio' value={-15} onChange={handleChange} checked={checked} /><br/>
      <input type='radio' value={0}  onChange={handleChange} checked={answer === 0}/><label>Neutral</label><br/>
      <input type='radio' value={15} checked={answer === 15} onChange={handleChange}/><br/>
      <input type='radio' value={33} checked={answer === -33} onChange={handleChange}/><label>Agree</label><br/>
      {
        (question.id === 15) ?
        <button type='submit' onClick={handleClick} onSubmit={handleSubmit}>Submit</button> :
        <button type='submit' onClick={handleClick}>Next</button>
      }
    </form>
  )
}

export default RadioForm
