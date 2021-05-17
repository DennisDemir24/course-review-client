import { SEARCH_COURSES } from './types'
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