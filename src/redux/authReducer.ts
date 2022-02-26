import {Dispatch} from "redux";
import {authApi, authLogin, authLogout} from "./api/api";

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
            return {...state, ...action.payload, isAuth: action.payload.isAuth}
        default:
            return state
    }
}

type setUserDataType = ReturnType<typeof setUserData>

type ActionType = setUserDataType


export const setUserData = (email: string,id: number,  login: string, isAuth: boolean) => {
    return {
        type: 'SET_USER_DATA',
        payload: {id, email, login, isAuth}
    } as const
}

export const setUserDataTC = () => {
    return (dispatch: Dispatch) => {
        authApi().then(data => {
            if(data.resultCode === 0){
                const {email, id, login} = data.data
                dispatch(setUserData(email, id, login, true))
            }
        })
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    authLogin(email, password, rememberMe).then(res => {
        if(res.data.resaultCode === 0) {
            // @ts-ignore
            setUserDataTC()
        }
    })
}

export const logoutTC = () => (dispatch: Dispatch) => {
    authLogout().then(res => {
        if(res.data.resaultCode === 0) {
            // @ts-ignore
            dispatch(setUserData(null, null, null, false))
        }
    })
}