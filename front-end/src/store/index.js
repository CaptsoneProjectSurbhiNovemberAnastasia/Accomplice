import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import suggestedMatches from './matches'
import user from './user'
import currentLocation from './currentLocation'
import form from './form'

const reducer = combineReducers({
  user,
  currentLocation,
  suggestedMatches,
  form,
})

// Use for production
const middleware = composeWithDevTools(
  applyMiddleware(
    thunkMiddleware,
    createLogger({
      collapsed: true,
    })
  )
)

const store = createStore(reducer, middleware)

export * from './user'
export * from './matches'
export * from './currentLocation'
export * from './form'

export default store
