import React from 'react';
import {UsersType} from "../../../../redux/usersReducer";
import styles from './MyFriends.module.css'
import loader from "../../../Users/loader.svg";
import {Navigate, NavLink, useNavigate} from "react-router-dom";



type PropsType = {
    friends: UsersType
}

function MyFriends(props: PropsType) {

    const navigate = useNavigate()

    let photo: string | null;

    if (!props.friends.photos) {
        return <img src={loader} alt={''}/>
    } else {
        photo = props.friends.photos.large
    }

    return (
        <div className={styles.myFriend}>
            <img className={styles.img}
                 onClick={()=> {
                     return navigate(`/profile/${props.friends.id}`)
                 }}
                 src={photo ? photo : 'https://i.vimeocdn.com/portrait/39345265_640x640'} alt={''}/>
            <span>{props.friends.name}</span>
        </div>
    );
}

export default MyFriends;