import React, {useEffect} from 'react';
import Profile from "./Profile";
import {ProfilePropsType} from "./ProfileContainer";
import {useParams} from "react-router-dom";
import {getStatus} from "../../redux/api/api";




function ProfileComponent(props: ProfilePropsType) {
    const setProfile = props.setProfile
    const params = useParams()
    const userId = params.id

    useEffect(() => {
        console.log('render')
        if (userId) {
            props.setProfile(userId)
            props.getStatus(userId)
        }
    },[setProfile, userId])

        return (
            <Profile {...props} />
        );

}

export default ProfileComponent;