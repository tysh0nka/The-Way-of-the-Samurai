import React from 'react';
import '../../App.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";


export type ProfileType = {
    posts : Array<PostType>
}

function Profile (props: ProfileType) {
    return (
        <div className={'content'}>
           <ProfileInfo/>
            <MyPosts posts={props.posts}/>

        </div>
    );
}

export default Profile;