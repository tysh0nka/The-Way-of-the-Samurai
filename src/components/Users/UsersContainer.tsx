import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {
    followAC, followUsersTC, getUsersTC,
    setCountPageAC,
    setTotalCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unFollowAC, UnfollowUsersTC,
    UsersType
} from "../../redux/usersReducer";
import UsersC from "./UsersApiComponent";



type MapStateToPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    ifFetching: boolean
}

type MapDispatchToPropsType = {
    follow: (userID: any) => void
    unFollow: (userID: any) => void
    setCurrentPage: (value: number) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
    followUserTC: (id: number) => void
    UnfollowUsersTC: (id: number) => void
}
export type UsersPropsType = MapDispatchToPropsType & MapStateToPropsType

function mapStateToProps(state: AppStateType): MapStateToPropsType {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        ifFetching: state.usersPage.isFetching,
    }
}

function mapDispatchToProps(dispatch: Dispatch): MapDispatchToPropsType {
    return {
        follow: (userID: any) => {
            dispatch(followAC(userID))
        },
        unFollow: (userID: any) => {
            dispatch(unFollowAC(userID))
        },
        setCurrentPage: (value: number) => {
            dispatch(setCountPageAC(value))
        },
        getUsersTC: (currentPage: number, pageSize: number) => {
            // @ts-ignore
            dispatch(getUsersTC(currentPage, pageSize))
        },
        followUserTC: (id: number) => {
            // @ts-ignore
            dispatch(followUsersTC(id))
        },
        UnfollowUsersTC: (id: number) => {
            // @ts-ignore
            dispatch(UnfollowUsersTC(id))
        }
}}

export default connect(mapStateToProps, mapDispatchToProps)(UsersC);