import React from 'react';
import '../../App.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from "./ProfileInfo/ProfileContainer";

function Profile (props: ProfilePropsType) {
    return (
        <div className={'content'}>
           <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;