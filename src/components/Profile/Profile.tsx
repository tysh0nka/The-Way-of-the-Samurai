import React from 'react';
import '../../App.css';
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile () {
    return (
        <div className={style.content}>
           <ProfileInfo/>
            <MyPosts/>

        </div>
    );
}

export default Profile;