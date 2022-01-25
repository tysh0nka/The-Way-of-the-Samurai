    import React, {Component} from 'react';
import {UsersPropsType} from "./UsersContainer";
import Users from "./Users";
import loader from './loader.svg'



class UsersApiComponent extends Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber: number) => {
        this.props.getUsersTC(pageNumber, this.props.pageSize)
    }
    render() {

        return (
            <>
                {this.props.ifFetching? <img src={loader} alt={''}/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       follow={this.props.followUserTC}
                       unFollow={this.props.UnfollowUsersTC}
                       users={this.props.users}
                />
            </>
        );
 }
}
export default UsersApiComponent;