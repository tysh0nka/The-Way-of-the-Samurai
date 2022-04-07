import React, {useEffect} from 'react';
import styles from './Subscriptions.module.css'
import {getFriendsTC, UsersType} from "../../../redux/usersReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";
import MyFriends from "./MyFriends/MyFriends";

function Subscriptions() {

    const friends = useSelector<AppStateType, Array<UsersType>>(state => state.usersPage.friends)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFriendsTC())
    }, []);

    console.log(friends)

    const myFriends = friends.filter((f, index) => index < 6).map(m => {
        return (
            <MyFriends key={m.id} friends={m}/>
        )
    })

    console.log(myFriends)

    return (
        <div className={styles.subBlock}>
            <span className={styles.title}>Subscriptions</span>
            <div className={styles.myFriends}>
                {myFriends}
            </div>
            <a className={styles.all} href={'#'}>All</a>
        </div>
    );
}

export default Subscriptions;