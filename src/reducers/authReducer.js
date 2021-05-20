/* eslint-disable import/no-anonymous-default-export */
import {LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT} from '../actions/types'

const initialState = {
    token: localStorage.getItem('token'),
    user: localStorage.getItem('username'),
    loading: true,
    error: null,
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
    errorMessage: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('username',action.payload.userName)
            localStorage.setItem('isAuthenticated',true)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false,
                errorMessage:"",
                user: localStorage.getItem('username')
            }
           
        case LOGOUT:
            localStorage.removeItem("token")
            localStorage.removeItem("username")
            localStorage.removeItem('isAuthenticated')
   
            return {
                ...state,   
                token: "",         
                isAuthenticated: false,
                user:null,
                errorMessage:""
            }
        case LOGIN_FAIL:
            return {
                ...state,   
                errorMessage:"Login failed"
            }
        default:
            return state
    }
}
