import React, {useEffect} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {ProfilePropsType} from "./ProfileInfo/ProfileContainer";
import {useParams} from "react-router-dom";
import {getProfile} from "../../redux/api/api";
import {setUserProfileTC} from "../../redux/profileReducer";


function ProfileComponent(props: ProfilePropsType) {
    const setProfile = props.setProfile
    const params = useParams()
    const userId = params.id

    useEffect(() => {
        debugger
        props.setProfile(userId as string)
        
    },[setProfile, userId])

        return (
            <Profile {...props}/>
        );

}

export default ProfileComponent;