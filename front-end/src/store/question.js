import axios from 'axios'

export const GET_QUESTIONS = 'GET_QUESTIONS'

const getQuestions = questions => ({
  type: GET_QUESTIONS,
  questions,
})

export const fetchQuestions = () => async dispatch => {
  try {
    const questions = await axios.get('http://localhost:8080/api/questions')
    dispatch(getQuestions(questions.data))
  } catch (err) {
    console.log(err)
  }
}

const initialState = []

const questions = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTIONS: {
      return action.questions
    }
    default: {
      return state
    }
  }
}

export default questions
