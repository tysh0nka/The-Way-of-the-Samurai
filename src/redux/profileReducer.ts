import {Dispatch} from "redux";
import {changeStatus, getProfile, getStatus} from "./api/api";
import {AxiosResponse} from "axios";

export type ProfileType = {
    "aboutMe": null| string,
    "contacts": {
        "facebook": null| string,
        "website": null| string,
        "vk": null| string,
        "twitter": null| string,
        "instagram": null| string,
        "youtube": null| string,
        "github": null| string,
        "mainLink": null| string
    },
    "lookingForAJob": boolean,
    "lookingForAJobDescription": null| string,
    "fullName": string,
    "userId": number,
    "photos": {
        "small": undefined| string,
        "large": undefined| string
    }
}


export type PostType = {
    id: number;
    message: string;
    likesCount: number;
}

const initialState = {
    profile: {} as ProfileType,
    posts: [
        {id: 1, message: 'Hello', likesCount: 1},
        {id: 2, message: 'Hi', likesCount: 5},
        {id: 3, message: 'one', likesCount: 3},
        {id: 4, message: 'two', likesCount: 6},
        {id: 5, message: 'three', likesCount: 7},
    ] as Array<PostType>,
    status: '',
}

type InitialStateType = typeof initialState


export const profileReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost = {
                id: 5,
                message: action.newPost,
                likesCount: 0
            }
            let newState = {...state}
            newState.posts = [...state.posts]
            newState.posts.push(newPost);
            return newState
        }

        case "SET_USER_PROFILE": {
            return {...state, profile: action.profile}
        }
        case "CHANGE_STATUS": {
            if (action.payload.status !== null) {
                return {...state, status: action.payload.status}
            } else {
                return {...state, status: 'Статус отсутствует'}
            }
        }
        default:
            return state
    }
}


type AddPostActionType = ReturnType<typeof AddActionCreate>
type SetUserProfileType = ReturnType<typeof setUserProfile>
type changeStatusACType = ReturnType<typeof changeStatusAC>
type ActionType = AddPostActionType  | SetUserProfileType| changeStatusACType
export const AddActionCreate = (newPost: string) => {
    return {type: "ADD-POST", newPost} as const
}

export const setUserProfile = (profile: ProfileType) => ({type: 'SET_USER_PROFILE', profile}as const )
export const setUserProfileTC = (id: string) => {
    return (dispatch: Dispatch) => {
        getProfile(id as string).then(r => {
            console.log(r.data)
            dispatch(setUserProfile(r.data))
        })
    }
}

export const changeStatusAC = (status: string) => ({type: 'CHANGE_STATUS', payload: {status}} as const)
export const changeStatusTC = (status: string) => {
    return (dispatch: Dispatch) => {
        changeStatus(status).then(r => {
            if (r.data.resultCode === 0) {
                dispatch(changeStatusAC(status))
            }
        })
    }
}

export const getStatusTC = (userId: string) => {
    return (dispatch: Dispatch) => {
        getStatus(userId).then(r => {
            dispatch(changeStatusAC(r))
    })
}
}