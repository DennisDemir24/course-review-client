import {
  POST_REVIEW,
} from '../actions/types'

const initialState = {
  reviews: null,
  loading: true,
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
    default:
      return state
  }
}
