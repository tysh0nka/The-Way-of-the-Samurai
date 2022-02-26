import {followUsers, getUsers, UnfollowUsers} from "./api/api";
import {Dispatch} from "redux";

export type UsersType = {
    "name": string,
    "id": number,
    "photos": {
        "small": null,
        "large": null
    },
    "status": null,
    "followed": boolean
}

const initialState = {
    users: [] as Array<UsersType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
}
type InitialStateType = typeof initialState

export const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(m => m.id === action.userID ? {...m, followed: true} : m)}
        case 'UNFOLLOW':
            return {...state, users: state.users.map(m => m.id === action.userID ? {...m, followed: false} : m)}
        case 'USERS':
            return {...state, users: [...action.users]}
        case "SET-COUNT-PAGE":
            return {...state, currentPage: action.value}
        case  "SET-TOTAL-COUNT":
            return {...state, totalUsersCount: action.totalCount}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export type followACType = ReturnType<typeof followAC>
export type unFollowACType = ReturnType<typeof unFollowAC>
export type setUsersACType = ReturnType<typeof setUsersAC>
export type setCountPageACType = ReturnType<typeof setCountPageAC>
export type setTotalCountACType = ReturnType<typeof setTotalCountAC>
export type toggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>

export type ActionsType = followACType|unFollowACType|setUsersACType| setCountPageACType | setTotalCountACType | toggleIsFetchingACType



export const followAC = (userID: any) => ({type: "FOLLOW", userID} as const)
export const unFollowAC = (userID: any) => ({type: 'UNFOLLOW', userID} as const)
export const setUsersAC = (users: Array<UsersType>) => ({type: "USERS", users} as const)
export const setCountPageAC = (value: number) => ({type: "SET-COUNT-PAGE", value} as const)
export const setTotalCountAC = (totalCount: number) => ({type: "SET-TOTAL-COUNT", totalCount} as const)
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: "TOGGLE-IS-FETCHING", isFetching} as const)


export const getUsersTC = (currentPage: number,pageSize: number ) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetchingAC(true))
        dispatch(setCountPageAC(currentPage))
        getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsersAC(data.items))
            dispatch(setTotalCountAC(data.totalCount))
            dispatch(toggleIsFetchingAC(false))

        })
    }
}
export const UnfollowUsersTC = (id: number) => {
    return (dispatch: Dispatch) => {
        UnfollowUsers(id).then(data => {
            if (data.resultCode === 0) {
               dispatch(unFollowAC(id))
                dispatch(toggleIsFetchingAC(false))
            }
        })
    }
}

export const followUsersTC = (id: number) => {
    debugger
return (dispatch: Dispatch) => {
    followUsers(id).then(data => {
        if (data.resultCode === 0) {
            dispatch(followAC(id))

        }
    })
}
}
