import React from 'react';
import style from "../Profile.module.css";
import loader from '../../Users/loader.svg'
import ProfileStatus from "./ProfileStatus";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {ProfileType} from "../../../redux/profileReducer";


const ProfileInfo = () => {

    const profile = useSelector<AppStateType, ProfileType>(state => state.profilePage.profile)
    let photo;

    if (!profile.photos) {
        return <img src={loader} alt={''}/>
    } else {
        photo = profile.photos.large
    }

    return (
        <div className={style.profileInfo}>
            <div className={style.photo}>
                <img className={style.imgContent2}
                     src={photo ? photo : 'https://i.vimeocdn.com/portrait/39345265_640x640'} alt={''}/>
                <button className={style.editPhoto}>Edit Photo</button>
            </div>
            <div className={style.info}>
                Name: {profile.fullName}
                <ProfileStatus/>
            </div>
        </div>
    );
};

export default ProfileInfo;