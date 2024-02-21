import {userAPI} from "../api/api";
import {PhotosType} from "./profile-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "./redux-store";
import {ThunkAction} from "redux-thunk";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USER_TOTAL_COUNT = 'SET_USER_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


export type UsersType = {
    id: number
    name: string
    photos: PhotosType
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string,
        country: string
    }
}


let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number> // array of users id
}
type InitialStateUserType = typeof initialState

const userReducer = (state = initialState, action: AllActionsType): InitialStateUserType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u: any) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })

            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u: any) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })

            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_USER_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress.filter((id: number) => id !== action.userId)]
                    : state.followingInProgress.filter((id: number) => id !== action.userId)
            }

        default:
            return state
    }
}
type AllActionsType =
    FollowSuccessActionType
    | UnfollowSuccessActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | ToggleIsFetchingActionType
    | ToggleFollowingInProgressActionType


type FollowSuccessActionType = {
    type: typeof FOLLOW
    userId: number
}
export const followSuccess = (userId: number): FollowSuccessActionType => ({type: FOLLOW, userId})

type UnfollowSuccessActionType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => ({type: UNFOLLOW, userId})

type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UsersType>
}
export const setUsers = (users: Array<UsersType>): SetUsersActionType => ({type: SET_USERS, users})

type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage})

type SetTotalUsersCountActionType = {
    type: typeof SET_USER_TOTAL_COUNT
    count: number
}
export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountActionType => ({
    type: SET_USER_TOTAL_COUNT,
    count: totalCount
})

type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})

type ToggleFollowingInProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}
export const toggleFollowingInProgress = (isFetching: boolean, userId: number): ToggleFollowingInProgressActionType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})
//thank

type GetStateType = () => AppStateType
type DispatchType = Dispatch<AllActionsType>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, AllActionsType>

export const requestUsers = (page: number, pageSize: number): ThunkType => {
    return async (dispatch: DispatchType, getState: GetStateType) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))

        const data = await userAPI.getUsers(page, pageSize)

        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}
//thank
export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))

        const response = await userAPI.follow(userId)

        if (response.data.resultCode === 0) {
            dispatch(followSuccess(userId))
        }
        dispatch(toggleFollowingInProgress(false, userId))
    }
}
//thank
export const unfollow = (userId: number): ThunkType => {
    return async (dispatch ) => {
        dispatch(toggleFollowingInProgress(true, userId))

        const response = await userAPI.unfollow(userId)

        if (response.data.resultCode === 0) {
            dispatch(unfollowSuccess(userId))
        }
        dispatch(toggleFollowingInProgress(false, userId))
    }
}


export default userReducer;