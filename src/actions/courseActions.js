import { SEARCH_COURSES, GET_COURSE_BY_ID, POST_REVIEW } from './types'
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

export const getCourseById = (id) => async (dispatch) => {
    try {
     const res = await axios.get(`https://api.kurskollen.xyz/api/courses/course/${id}`)
     
     dispatch({
       type: GET_COURSE_BY_ID,
       payload: res.data
     })
    } catch (error) {
        console.log(error)
    }

}

export const postReview = (formdata) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = axios.post('`https://api.kurskollen.xyz/api/courses/postreview`', formdata, config)
        dispatch({
            type: POST_REVIEW,
            payload: res.data
        })
    } catch (error) {
        console.log(error);
    }
}