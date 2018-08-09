import { combineReducers } from 'redux'
import { GET_USERS } from './action-creators'

const users = (state = [], action) => {
  switch (action.type) {
    case GET_USERS: return action.users
  default: return state
  }
}

const rootReducer = combineReducers({
  users
})

export default rootReducer
