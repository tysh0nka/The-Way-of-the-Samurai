import {Dispatch} from "redux";
import {authApi} from "./api/api";

export type authType = {
    id:null | number,
    login: null| string,
    email: null| string,
    isAuth: boolean,
}

const initialState: authType = {
    id:null,
    login: null,
    email: null,
    isAuth: false,
}



export const authReducer = (state= initialState, action: ActionType): authType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}

type setUserDataType = ReturnType<typeof setUserData>

type ActionType = setUserDataType


export const setUserData = (email: string,id: number,  login: string) => {
    debugger
    return {
        type: 'SET_USER_DATA',
        data: {id, email, login}
    } as const
}

export const setUserDataTC = () => {
    return (dispatch: Dispatch) => {
        authApi().then(data => {
            if(data.resultCode === 0){
                const {email, id, login} = data.data
                dispatch(setUserData(email, id, login))
            }
        })
    }
}