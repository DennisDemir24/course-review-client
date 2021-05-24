import { POST_REVIEW, SCORE_REVIEW, EDIT_REVIEW, SET_CURRENT, CLEAR_CURRENT } from './types'
import axios from 'axios'

export const postReview = (review) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const res =  await axios.post(
      'https://api.kurskollen.xyz/api/courses/postreview',
      review,
      config
    )
    console.log(res);
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
export const editReview = (newReview) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  try {
    const res =  await axios.post(
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

export const scoreReview= (thumpsUp)=> async (dispatch)=> {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  try {
    const res =  await axios.post(
      'https://api.kurskollen.xyz/api/courses/scorereview',
      thumpsUp,
      config
    )
    dispatch({
      type: SCORE_REVIEW,
      payload: res.data,
    })
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