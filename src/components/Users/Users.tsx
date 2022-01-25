import React, {useState} from 'react';
import classes from "./Users.module.css";
import {UsersType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";


type PropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (value: number) => void
    follow: (userID: any) => void
    unFollow: (userID: any) => void
}

function Users(props: PropsType) {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount && i < 10; i++) {
        pages.push(i)
    }

    const [disabled, setDisabled] = useState(0)

    return (
        <div>
            <div>
                {pages.map(p =>
                    <span onClick={() => {
                        props.onPageChanged(p)
                    }} className={props.currentPage === p ? classes.pageCount : ''}>{p}</span>
                )}
            </div>
            {props.users.map(m =>
            <div key={m.id}>
                    <span>
                        <NavLink to={`/profile/${m.id}`}>
                            <div>
                            <img className={'imgUsersAvatar'}
                                 src={m.photos.large === null ? 'https://i.vimeocdn.com/portrait/39345265_640x640' : m.photos.large}
                                 alt={''}/>
                        </div>
                        </NavLink>
                        <div>
                           {m.followed ? <button disabled={disabled === m.id} onClick={() => {
                               props.unFollow(m.id)

                           }}>Unfollow</button> : <button disabled={disabled === m.id} onClick={() => {
                              props.follow(m.id)
                           }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <div>{m.name}</div>
                        <div>{m.status}</div>
                    </span>
                    <span>
                    </span>
                </div>)}
        </div>
    );
}

export default Users;