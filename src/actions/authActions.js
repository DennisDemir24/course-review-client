import { LOGIN_SUCCESS,LOGOUT,LOGIN_FAIL } from './types'
import axios from 'axios'


export const login = (formData) => async (dispatch) => {

    if(formData.username === "logout"){
        dispatch({type:LOGOUT})
        return
    }
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.post('https://api.kurskollen.xyz/api/auth/login/', formData, config)

        if (res.data.loggedIn) {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        } else {
            dispatch({type: LOGIN_FAIL})
        }


    } catch (error) {
        console.log(error)
    }
}


export const logout= ()=> async (dispatch) =>{

  
}
