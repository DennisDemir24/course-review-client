import {
  SEARCH_COURSES,
  GET_COURSE_BY_ID,
  POST_REVIEW,
} from './types'
import axios from 'axios'

// Search server for courses
export const searchCourses = (searchTerm) => async (dispatch) => {
    try {
        const res = await axios.get(`https://api.kurskollen.xyz/api/courses/search/${searchTerm}`)

        dispatch({
            type: SEARCH_COURSES,
            payload: res.data
        })
    } catch (error) {
        
    }
}

export const getCourseById = (id, token) => async (dispatch) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const getCourseById = {
            token: token,
            courseID: id

        }
        const res = await axios.post(
            'https://api.kurskollen.xyz/api/courses/course',
            getCourseById,
            config
        )

        dispatch({
            type: GET_COURSE_BY_ID,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }

}

