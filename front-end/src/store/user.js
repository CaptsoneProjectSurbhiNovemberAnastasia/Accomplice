import axios from 'axios'
import history from '../history'
axios.defaults.withCredentials = true

// ACTION TYPES
const GET_USER = 'GET_USER'
const LOGOUT_USER = 'LOGOUT_USER'

// INITIAL STATE
const defaultUser = {}

// ACTION CREATORS
const getUser = user => ({
    type: GET_USER,
    user
  }),
  logOutUser = () => ({
    type: LOGOUT_USER
  })

// THUNK CREATORS

export const me = () => dispatch =>
  axios
    .get('http://localhost:8080/auth/me')
    .then(res => dispatch(getUser(res.data || defaultUser)))
    .catch(err => console.log(err))

export const auth = (email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`http://localhost:8080/auth/${method}`, {
      email,
      password
    })
  } catch (authError) {
    return dispatch(getUser({ error: authError }))
  }
  try {
    dispatch(getUser(res.data))
    if (res.data.firstName === null) {
      history.push('/profile')
    } else {
      history.push('/question')
    }
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('http://localhost:8080/auth/logout')
    dispatch(logOutUser())
    localStorage.clear()
    history.push('/')
  } catch (err) {
    console.log(err)
  }
}
// editUser expects the state's currentUser.id, and updated info to be prepackaged into a single, nested object
export const updateUser = updateInfo => async dispatch => {
  try {
    console.log(updateInfo)
    const id = updateInfo.id
    const { data } = await axios.put(
      `http://localhost:8080/api/user/${id}`,
      updateInfo
    )
    dispatch(getUser(data))
  } catch (err) {
    console.log(err)
  }
}

export const deleteAccount = userId => dispatch => {
  dispatch(logOutUser())
  axios
    .delete(`http://localhost:8080/api/userAccount/${userId}`)
    .catch(err => console.log(err))
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
