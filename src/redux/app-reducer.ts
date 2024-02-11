import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'


type UsersType = {
    initialized: boolean
}


let initialState: UsersType = {
    initialized: false
}


const appReducer = (state: any = initialState, action: any): UsersType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }
}
export const initializedSuccessAC = () => ({type: INITIALIZED_SUCCESS})

//redux-thunk
export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())
    promise.then(() => {
        dispatch(initializedSuccessAC())
    })

}


export default appReducer;