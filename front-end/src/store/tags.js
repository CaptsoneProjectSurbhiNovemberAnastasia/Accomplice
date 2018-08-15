import axios from 'axios'
export const GET_TAGS = 'GET_TAGS'

const getTags = tags => ({ type: GET_TAGS, tags })

export const fetchTags = () => async dispatch => {
  try {
    const { data } = await axios.get(`http://localhost:8080/api/tags`)
    dispatch(getTags(data))
  } catch (err) {
    console.error(err)
  }
}

const tags = (state = [], action) => {
  switch (action.type) {
    case GET_TAGS: {
      return action.tags
    }
    default: {
      return state
    }
  }
}
export default tags
