import axios from 'axios'

export const GET_USERS = 'GET_USERS'

const getUsers = users => {
  return { type: GET_USERS, users }
}

export const fetchUsers = () => {
  return async dispatch => {
    try {
      const response = await axios.get('http://localhost:8080/api/user')
      const users = response.data
      const action = getUsers(users)
      dispatch(action)
    } catch (err) {
      console.log(err)
    }
  }
}
export default function(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return action.users
    default:
      return state
  }
}
