import axios from 'axios'

export const GET_USERS = 'GET_USERS'

const getUsers = users => {
  return { type: GET_USERS, users}
}

export const fetchUsers = () => {
  return async dispatch => {
    try {
      const response = await axios.get('http://localhost:8080/')
      const profiles = response.data
      const action = getUsers(profiles)
      dispatch(action)
    } catch (err) {
      console.log(err)
    }
  }
}
