import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {
    followAC,
    setCountPageAC,
    setTotalCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unFollowAC,
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
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (value: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
export type UsersPropsType = MapDispatchToPropsType & MapStateToPropsType

function mapStateToProps(state: AppStateType): MapStateToPropsType {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        ifFetching: state.usersPage.isFetching
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
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (value: number) => {
            dispatch(setCountPageAC(value))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalCountAC(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersC);