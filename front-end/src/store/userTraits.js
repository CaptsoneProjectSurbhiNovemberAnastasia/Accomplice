import axios from 'axios'

const GET_USER_TRAITS = 'GET_USER_TRAITS'

const getTraitValues = values => ({
  type: GET_USER_TRAITS,
  userTraits
})

export const setTraitValues = (traits) => async dispatch => {
  try {

    const { data } = await axios.post('http://localhost:8080/api/user/traits', {})
    // dispatch(getTraitValues(data))
  } catch (e) {
    console.error(e)
  }
}


let initialState = []

const userTraits = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_TRAITS: {
      return action.userTraits
    }
    default: {
      return state
    }
  }
}

export default userTraits
