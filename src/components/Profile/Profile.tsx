import React from 'react';
import '../../App.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from "./ProfileContainer";

function Profile (props: ProfilePropsType) {
    return (
        <div className={'content'}>
           <ProfileInfo {...props}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;