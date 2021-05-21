import { POST_REVIEW } from './types'
import axios from 'axios'

export const postReview = (review) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const res = axios.post(
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