import axios from 'axios'
import history from '../history'

// ACTION TYPES
const GET_USER = 'GET_USER'
const LOGOUT_USER = 'LOGOUT_USER'

// INITIAL STATE
const defaultUser = {}

// ACTION CREATORS
const getUser = user => ({
  type: GET_USER,
  user,
})
const logOutUser = () => ({
  type: LOGOUT_USER,
})

// THUNK CREATORS
// export const fetchUser = id => {
//   return async dispatch => {
//     try {
//       const response = await axios.get(`http://localhost:8080/api/user/${id}`)
//       const currentUser = response.data
//       const action = getUser(currentUser)
//       dispatch(action)
//     } catch (err) {
//       console.log('User not found...', err)
//     }
//   }
// }

export const me = () => dispatch =>
  axios
    .get('/auth/me')
    .then(res => dispatch(getUser(res.data || defaultUser)))
    .catch(err => console.log(err))

export const auth = (email, password, method) => async dispatch => {
  console.log('hit auth in store')
  let res
  try {
    res = await axios.post(`http://localhost:8080/auth/${method}`, {
      email,
      password,
      method,
    })
  } catch (e) {
    return dispatch(getUser({ error: e }))
  }

  try {
    dispatch(getUser(res.data))
    history.push('/question')
  } catch (e) {
    console.error(e)
  }
}

export const logout = () => dispatch => {
  axios
    .post('/auth/logout')
    .then(_ => {
      dispatch(logOutUser())
      localStorage.clear()
    })
    .catch(err => console.log(err))
}
// updateUser expects the state's currentUser.id, and updated info to be prepackaged into a single, nested object
export const updateUser = (userId, updateInfo) => dispatch => {
  axios
    .put(`/api/userAccount/${userId}`, updateInfo)
    .then(res => {
      dispatch(getUser(res.data))
    })
    .catch(error => console.error(error))
}

export const deleteAccount = userId => dispatch => {
  dispatch(logOutUser())
  axios.delete(`/api/userAccount/${userId}`).catch(err => console.log(err))
}

// REDUCER

export default function currentUser(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case LOGOUT_USER:
      return defaultUser
    default:
      return state
  }
}