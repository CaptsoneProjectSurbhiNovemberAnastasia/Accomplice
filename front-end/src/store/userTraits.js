import axios from 'axios'

const GET_USER_TRAITS = 'GET_USER_TRAITS'

const getTraitValues = userTraits => ({
  type: GET_USER_TRAITS,
  userTraits
})

export const setTraitValues = userTraitValues => async dispatch => {
  try {
    const { data } = await axios.post('/api/user/traits', { userTraitValues })
    dispatch(getTraitValues(data))
  } catch (err) {
    console.error(err)
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
