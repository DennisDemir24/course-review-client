import { GET_COURSES, SEARCH_COURSES } from '../actions/types'

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
      default:
        return state
    }
}