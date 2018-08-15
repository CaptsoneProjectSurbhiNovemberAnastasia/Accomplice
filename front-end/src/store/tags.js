import axios from 'axios'
export const GET_TAGS = 'GET_TAGS',
  UPDATE_TAGS = 'UPDATE_TAGS'

const getTags = tags => ({ type: GET_TAGS, tags }),
  updateTags = tagIds => ({ type: UPDATE_TAGS, tagIds })

export const fetchTags = () => async dispatch => {
  try {
    const { data } = await axios.get(`http://localhost:8080/api/tags`)
    dispatch(getTags(data))
  } catch (err) {
    console.error(err)
  }
}

export const setTags = tags => async dispatch => {
  try {
    const { data } = await axios.post(`http://localhost:8080/api/tags`, tags)
    const selectedTagIds = data.map(tag => tag.id)
    dispatch(updateTags(selectedTagIds))
  } catch (e) {
    console.error(e)
  }
}

const tags = (state = [], action) => {
  switch (action.type) {
    case GET_TAGS: {
      return action.tags
    }
    case UPDATE_TAGS: {
      const newTags = state.map(tag => {
        if (action.tagIds.includes(tag.id)) {
          tag.selected = true
        } else {
          tag.selected = false
        }
        return tag
      })

      console.log(newTags)
      return newTags
    }
    default: {
      return state
    }
  }
}
export default tags
