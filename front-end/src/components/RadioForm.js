import React from 'react'

const RadioForm = (props) => {
  const { questions } = props

  return (
    <form >
      <label>question</label><br/>
      {
        [1,2,3,4,5].map(choice => (
          <label key={choice}>
            <input
              type='radio'
              value={choice}
              // onChange={handleChange}
            /> <br/>
            {choice}
          </label>
        ))
      }
      <br/><button type='submit'>Next</button>
    </form>
  )
}

export default RadioForm
