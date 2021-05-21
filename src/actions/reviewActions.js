import { POST_REVIEW } from './types'
import axios from 'axios'

export const postReview = (review) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const res =  axios.post(
      'https://api.kurskollen.xyz/api/courses/postreview',
      review,
      config
    )
    dispatch({
      type: POST_REVIEW,
      payload: res.data,
    })
  } catch (error) {
    console.log(error)
  }
}
/**
 * To edit a review 
 * @param {*} newReview 
 * @returns 
 */
export const editReview =(newReview)=> async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  try {
    const res =  axios.post(
      'https://api.kurskollen.xyz/api/courses/editreview',
      newReview,
      config
    )
    dispatch({
      type: POST_REVIEW,
      payload: res.data,
    })
  } catch (error) {
    console.log(error)
  }

}