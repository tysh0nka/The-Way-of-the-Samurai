import React, {useEffect} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {ProfilePropsType} from "./ProfileInfo/ProfileContainer";
import {useParams} from "react-router-dom";




function ProfileComponent(props: ProfilePropsType) {
    const setProfile = props.setProfile
    const params = useParams()
    const userId = params.id

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(r => {
                setProfile(r.data)
        })
    },[setProfile, userId])

        return (
            <Profile {...props}/>
        );

}

export default ProfileComponent;