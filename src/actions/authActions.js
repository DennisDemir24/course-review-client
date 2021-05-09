import { LOGIN_SUCCESS } from './types'
import axios from 'axios'


export const login = (formData) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.post('https://klusbert.xyz/api/auth/login/', formData, config)

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}