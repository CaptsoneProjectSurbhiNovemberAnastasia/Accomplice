import axios from 'axios'
export const GET_TAGS = 'GET_TAGS',
  SELECT_TAGS = 'SELECT_TAGS',
  UPDATE_ACTIVITY_TAGS = 'UPDATE_ACTIVITY_TAGS'

const getTags = tags => ({ type: GET_TAGS, tags }),
  updateTags = tagIds => ({ type: SELECT_TAGS, tagIds }),
  updateActivityTags = tagIds => ({ type: UPDATE_ACTIVITY_TAGS, tagIds })

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

export const setActivityTags = tags => async dispatch => {
  try {
    const { data } = await axios.post(
      'http://localhost:8080/api/activity/tags',
      { tags }
    )
    const activityTagIds = data.map(tag => tag.id)
    dispatch(updateActivityTags(activityTagIds))
  } catch (e) {
    console.error(e)
  }
}

const tags = (state = [], action) => {
  switch (action.type) {
    case GET_TAGS: {
      return action.tags.map(tag => {
        if (tag.selected === undefined) {
          tag.selected = false
        }
        if (tag.activity === undefined) {
          tag.activity = false
        }
        return tag
      })
    }
    case SELECT_TAGS: {
      const newTags = state.map(tag => {
        if (action.tagIds.includes(tag.id)) {
          tag.selected = true
        } else {
          tag.selected = false
        }
        return tag
      })

      return newTags
    }
    case UPDATE_ACTIVITY_TAGS: {
      const newTags = state.map(tag => {
        if (action.tagIds.includes(tag.id)) {
          tag.activity = true
        } else {
          tag.activity = false
        }
        return tag
      })
      return newTags
    }
    default: {
      return state
    }
  }
}
export default tags
