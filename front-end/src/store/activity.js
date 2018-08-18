import axios from 'axios'

const GET_ACTIVITY = 'GET_ACTIVITY'

const getActivity = activity => ({ type: GET_ACTIVITY, activity })

export const fetchActivity = () => async dispatch => {
  try {
    const { data } = await axios.get('http://localhost:8080/api/activity')
    dispatch(getActivity(data))
  } catch (e) {
    console.error(e)
  }
}

export const setActivity = (name, tags) => async dispatch => {
  try {
    const { data } = await axios.post('http://localhost:8080//api/activity', {
      name,
      tags
    })
    dispatch(getActivity(data))
  } catch (e) {
    console.error(e)
  }
}

const activity = (state = {}, action) => {
  switch (action.type) {
    case GET_ACTIVITY: {
      return action.activity
    }
    default: {
      return state
    }
  }
}

export default activity
