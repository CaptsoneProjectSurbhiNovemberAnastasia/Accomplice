import React from 'react'

const RadioForm = (props) => {
  const { values, question, handleSubmit, handleChange, handleClick, answer} = props

  return (
    <div>
      {
        !question ? <div>All done!</div> :
      <div>
        <div>{question.question}</div><br/>
          <form  onSubmit={handleSubmit}>
          {
            values.map(value =>
              <input type='radio' key={value} value={value}  onChange={handleChange} checked={+answer === value}/>
            )
          }
          <div className="scale">Disagree Neutral Agree</div>
          {
            (question.id === 15) ?
            <button type='submit' onClick={handleClick}>Submit</button> :
            <button type='button' onClick={function(evt) {handleClick(evt, question.id)}}>Next</button>
          }
          </form>
      </div>
      }

    </div>
  )
}

export default RadioForm
