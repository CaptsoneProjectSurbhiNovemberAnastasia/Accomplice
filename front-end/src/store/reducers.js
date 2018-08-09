import { combineReducers } from 'redux'
import { GET_USERS } from './action-creators'

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case GET_USERS: return action.users
  default: return state
  }
}

const rootReducer = combineReducers({
  users: usersReducer
})

export default rootReducer
