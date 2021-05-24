import { POST_REVIEW, POST_REVIEW_FAIL, SCORE_REVIEW, SCORE_REVIEW_FAIL, EDIT_REVIEW, SET_CURRENT, CLEAR_CURRENT, SCORE } from './types'
import axios from 'axios'

export const postReview = (review) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const res = await axios.post(
      'https://api.kurskollen.xyz/api/courses/postreview',
      review,
      config
    )

    if (res.data.POST_REVIEW_FAIL) {
      dispatch({ type: POST_REVIEW_FAIL, payload: res.data })
    } else{
      dispatch({type: POST_REVIEW, payload: res.data, })
    }
    
  } catch (error) {
    console.log(error)
  }
}
/**
 * To edit a review 
 * @param {*} newReview 
 * @returns 
 */
export const editReview = (newReview) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  try {
    const res = axios.post(
      'https://api.kurskollen.xyz/api/courses/editreview',
      newReview,
      config
    )

    dispatch({
      type: EDIT_REVIEW,
      payload: res.data,
    })
  } catch (error) {
    console.log(error)
  }

}

export const scoreReview = (thumpsUp) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  try {
    const res = await axios.post(
      'https://api.kurskollen.xyz/api/courses/scorereview',
      thumpsUp,
      config
    )
    
    if (res.data.SCORE_REVIEW_FAIL) {
      dispatch({ type: SCORE_REVIEW_FAIL, payload: res.data })
    } else {
      dispatch({ type: SCORE_REVIEW, payload: res.data })
    }

  } catch (error) {
    console.log(error)
  }
}



// Set current review
export const setCurrent = (review) => {
  return {
    type: SET_CURRENT,
    payload: review
  }
}

// Clear current review
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  }
} 

