import { SEARCH_COURSES, GET_COURSE_BY_ID, POST_REVIEW } from '../actions/types'

const initialState = {
  courses: null,
  loading: true,
  error: null,
  course:JSON.parse(localStorage.getItem('course')),
}



// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
      case SEARCH_COURSES:
        localStorage.removeItem('course')
        return {
            ...state,
            courses: action.payload
        }
      case GET_COURSE_BY_ID:
        localStorage.setItem('course',JSON.stringify(action.payload))
        return {
          ...state,
          course: action.payload
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