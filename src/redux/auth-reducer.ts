import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS'


type UsersType = {
    userId: null
    email: null
    login: null
    isAuth: boolean
    captchaUrl: null
}


let initialState: UsersType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}


const authReducer = (state: any = initialState, action: any): UsersType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}
export const setUserDataAC = (userId: any, email: any, login: any, isAuth: any) =>
    ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})

export const getCaptchaUrSuccessAC = (captchaUrl: null) =>
    ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})

//redux-thunk
export const getAuthUserData = () => async (dispatch: any) => {
    const response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, email, login,} = response.data.data
        dispatch(setUserDataAC(id, email, login, true))
    }

}

export const login = (email: string | number, password: string | number, rememberMe: boolean = false, captcha: null) => async (dispatch: any) => {
    const response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}
export const getCaptchaUrl = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url

    dispatch(getCaptchaUrSuccessAC(captchaUrl))

}

export const logout = () => async (dispatch: any) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setUserDataAC(null, null, null, false))
    }
}


export default authReducer;

// ctrl shift v = буфер обмена,   ctrl shift n = поиск по файлам