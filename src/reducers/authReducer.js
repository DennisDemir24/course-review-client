/* eslint-disable import/no-anonymous-default-export */
import { LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/types'

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  user: null,
  loading: true,
  error: null,
}

export default (state=initialState, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            }
        default:
            return state
    }
}