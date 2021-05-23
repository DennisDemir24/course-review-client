import {
  POST_REVIEW,
  SCORE_REVIEW,
  SET_CURRENT,
  CLEAR_CURRENT
} from '../actions/types'

const initialState = {
  reviews: null,
  loading: true,
  current: null,
  error: null,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case POST_REVIEW:
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
      }
    case SCORE_REVIEW:
      return {
        ...state,
        reviews: [state.reviews, action.payload],
      }
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      }
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      }
    default:
      return state
  }
}
