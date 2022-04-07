import React, {useEffect} from 'react';
import '../../App.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Subscriptions from "./Subscriptions/Subscriptions";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getStatusTC, setUserProfileTC} from "../../redux/profileReducer";
import MyPosts from "./MyPosts/MyPosts";
import {AppStateType} from "../../redux/store";

function Profile() {

    const dispatch = useDispatch()
    const params = useParams()
    const userId = params.id as string
    const myId = useSelector<AppStateType, number | null>(state => state.auth.id)

    useEffect(() => {
        if (userId) {
            dispatch(setUserProfileTC(userId))
            dispatch(getStatusTC(userId))
        }
    }, [userId])

    return (
        <div className={'content'}>
            <ProfileInfo/>
            {myId === +userId && <Subscriptions/>}
            <MyPosts/>
        </div>
    );
}

export default Profile;