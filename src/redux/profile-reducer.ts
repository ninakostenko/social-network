import {profileAPI, userAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'


type PostType = {
    id: number
    message: string
    like: number
}

export type InitialStateType = {
    postsData: Array<PostType>
    profile: null
    status: ''

}

let initialState = {
    postsData: [
        {id: 1, message: "..Hi", like: 5},
        {id: 2, message: "..Hello", like: 15}
    ],
    profile: null,
    status: ''
}


const profileReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                like: 0
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST:
            return {
                ...state,
                postsData: state.posts.filter((p: any) => p.id != action.postId)
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }

        default:
            return state
    }
}
export const addPostActionCreator = (newPostText: string) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile: null) => ({type: SET_USER_PROFILE, profile})
export const setStatusAC = (status: null) => ({type: SET_STATUS, status})
export const deletePostAC = (postId: number) => ({type: DELETE_POST, postId})
export const savePhotoSuccess = (photos: any) => ({type: SAVE_PHOTO_SUCCESS, photos})

//thunk
export const getUserProfile = (userId: number) => async (dispatch: any) => {
    const response = await userAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}
//thunk
export const getStatus = (userId: number) => async (dispatch: any) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatusAC(response.data))
}
//thunk
export const updateStatus = (status: any) => async (dispatch: any) => {
    try {
        const response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatusAC(status))
        }
    }catch (error) {
        alert('error')
    }

}
export const savePhoto = (file: any) => async (dispatch: any) => {
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export const saveProfile = (profile: any) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}))
        // dispatch(stopSubmit("edit-profile", {"contacts": {"facebook": response.data.messages[0]}}))
        return Promise.reject(response.data.messages[0])
    }
}


export default profileReducer;