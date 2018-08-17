import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import suggestedMatches from './suggestedMatches'
import user from './user'
import currentLocation from './currentLocation'
import form from './form'
import tags from './tags'
import matches from './matches'
import questions from './question'
import activity from './activity'
import userTraitValues from './userTraits'

const reducer = combineReducers({
  user,
  currentLocation,
  suggestedMatches,
  form,
  matches,
  questions,
  tags,
  activity,
  userTraitValues
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
export * from './suggestedMatches'
export * from './currentLocation'
export * from './form'
export * from './matches'
export * from './question'
export * from './tags'
export * from './activity'
export * from './userTraits'

export default store
