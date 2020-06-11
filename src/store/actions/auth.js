import axios from "axios";
import {AUTH_LOGOUT, AUTH_SUCCESS} from "./actionTypes";

export function auth(email, password, isLogin) {
    return async dispatch => {
        const authData = {
            email, password,returnSecureToken: true
        }

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDqSeu5qR8vcJ7OWAKFVTN4mx78CYpJ2aA'

        if (isLogin) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDqSeu5qR8vcJ7OWAKFVTN4mx78CYpJ2aA'
        }

        const response = await axios.post(url, authData)

        const data = response.data

        const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)

        localStorage.setItem('token', data.idToken)
        localStorage.setItem('userId', data.localID)
        localStorage.setItem('expirationDate', expirationDate)

        dispatch(authSuccess(data.idToken))
        dispatch(authLogout(data.expiresIn))

    }
}

export function authLogout(time) {
    return dispatch => {
        setTimeout(()=>{
            dispatch(logout())
        }, time * 1000)
    }
}

export function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('expirationDate')
    return {
        type: AUTH_LOGOUT
    }
}

export function autoLogin() {
    return dispatch => {
        const token = localStorage.getItem('token')
        if (!token) {
            dispatch(logout())
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if(expirationDate <= new Date()) {
                dispatch(logout())
            } else {
                dispatch(authSuccess(token))
                dispatch(authLogout((expirationDate.getTime()-new Date().getTime()) / 1000))
            }
        }
    }
}

export function authSuccess(token) {
    return {
        type: AUTH_SUCCESS,
        token
    }
}
