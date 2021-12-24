import React from 'react';
import '../../App.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile () {
    return (
        <div className={'content'}>
           <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;