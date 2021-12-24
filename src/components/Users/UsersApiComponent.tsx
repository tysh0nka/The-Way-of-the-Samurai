import React, {Component} from 'react';
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";
import Users from "./Users";
import loader from './loader.svg'


class UsersApiComponent extends Component<UsersPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(r => {
            this.props.setUsers(r.data.items)
            this.props.setTotalUsersCount(r.data.totalCount)
            this.props.toggleIsFetching(false)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(r => {
            this.props.setUsers(r.data.items)
            this.props.toggleIsFetching(false)
        })
    }

    render() {

        return (
            <>
                {this.props.ifFetching? <img src={loader} alt={''}/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       follow={this.props.follow}
                       unFollow={this.props.unFollow}
                       users={this.props.users}
                />
            </>
        );
 }
}
export default UsersApiComponent;