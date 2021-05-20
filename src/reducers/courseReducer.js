import { SEARCH_COURSES, GET_COURSE_BY_ID, POST_REVIEW } from '../actions/types'

const initialState = {
  courses: null,
  loading: true,
  error: null,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
      case SEARCH_COURSES:
        return {
            ...state,
            courses: action.payload
        }
      case GET_COURSE_BY_ID:
        return {
          ...state,
          courses: action.payload
        }
      case POST_REVIEW:
        return {
          ...state,
          courses: [...state.courses, action.payload]
        }
      default:
        return state
    }
}