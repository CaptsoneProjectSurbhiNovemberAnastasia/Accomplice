// ACTION TYPES
const REMOVE_LOCATION = 'REMOVE_LOCATION'

// ACTION CREATORS

const removeCurrentZipcode = () => ({
  type: REMOVE_LOCATION,
})

// THUNK

export const removeCurrentLocation = () => dispatch => {
  dispatch(removeCurrentZipcode())
}

// REDUCER

export default function(state = [], action) {
  switch (action.type) {
    case REMOVE_LOCATION:
      return []
    default:
      return state
  }
}
