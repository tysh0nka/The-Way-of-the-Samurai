import {Dispatch} from "redux";
import {authApi, authLogin, authLogout} from "./api/api";
import {ThunkDispatch} from "redux-thunk";

export type AuthType = {
    id: null | number,
    login: null| string,
    email: null| string,
    isAuth: boolean,
}

const initialState: AuthType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}



export const authReducer = (state= initialState, action: ActionType): AuthType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {...state, ...action.payload, isAuth: action.payload.isAuth}
        default:
            return state
    }
}

type setUserDataType = ReturnType<typeof setUserData>

type ActionType = setUserDataType


export const setUserData = ({email, id, login, isAuth}: AuthType) => {
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
                dispatch(setUserData({email, id, login, isAuth: true}))
            }
        })
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: ThunkDispatch<any, any, any>) => {
    authLogin(email, password, rememberMe).then(res => {
            dispatch(setUserDataTC())
    })
}

export const logoutTC = () => (dispatch: Dispatch) => {
    authLogout().then(res => {
            dispatch(setUserData({email:null, id:null, login:null, isAuth: false}))
    })
}