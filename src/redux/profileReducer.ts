import profile from "../components/Profile/Profile";
import {Dispatch} from "redux";
import {getProfile} from "./api/api";

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
    newPostText: '' as string
}

type InitialStateType = typeof initialState


export const profileReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            let newState = {...state}
            newState.posts = [...state.posts]
            newState.posts.push(newPost);
            newState.newPostText = '';
            return newState
        }
        case 'NEW-POST-TEXT': {
            let newState = {...state}
            newState.newPostText = action.newText;
            return newState
        }
        case "SET_USER_PROFILE": {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}


type AddPostActionType = ReturnType<typeof AddActionCreate>
type NewPostTextActionType = ReturnType<typeof NewPostTextActionCreate>
type SetUserProfileType = ReturnType<typeof setUserProfile>
type ActionType = AddPostActionType | NewPostTextActionType | SetUserProfileType
export const AddActionCreate = () => {
    return {type: "ADD-POST"} as const
}

export const NewPostTextActionCreate = (text: string) => {
    return {
        type: 'NEW-POST-TEXT',
        newText: text
    } as const
}

export const setUserProfile = (profile: ProfileType) => ({type: 'SET_USER_PROFILE', profile}as const )
export const setUserProfileTC = (id: string) => {
    return (dispatch: Dispatch) => {
        debugger
        getProfile(id as string).then(r => {
            dispatch(setUserProfile(r.data))
        })
    }
}