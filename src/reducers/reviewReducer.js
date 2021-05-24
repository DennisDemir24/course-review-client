import {
  POST_REVIEW,
  POST_REVIEW_FAIL,
  SCORE_REVIEW,
  SCORE_REVIEW_FAIL,
  SET_CURRENT,
  CLEAR_CURRENT,
  EDIT_REVIEW,
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
        loading: false
      }
    case EDIT_REVIEW:
      return {
        ...state,
        reviews: state.reviews.map(review => review.id === action.payload.id ? action.payload : review)
      }
    case POST_REVIEW_FAIL:
      return {
        ...state,   
        POST_REVIEW_FAIL:action.payload.message
    }
    case SCORE_REVIEW:
      return {
        ...state,
        reviews: [state.reviews, action.payload],
      }
    case SCORE_REVIEW_FAIL:
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
